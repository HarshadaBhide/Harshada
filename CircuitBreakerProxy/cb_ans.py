from functools import wraps
from datetime import datetime, timedelta
import redis

#redis database connection
r = redis.StrictRedis(host='192.168.99.100', port=6379, db=0)
G_CB_MAP = {}

class CircuitBreaker(object):
    def __init__(self, name=None, expected_exception=Exception, max_failure_to_open=3, reset_timeout=10):
        self._name = name
        self._expected_exception = expected_exception
        self._max_failure_to_open = max_failure_to_open
        self._reset_timeout = reset_timeout
        # Set the initial state
        self.close()

    def close(self):
        self._is_closed = True
        self._failure_count = 0

    def open(self):
        self._is_closed = False
        self._opened_since = datetime.utcnow()
        print ("------------------Circuit Breaker is OPEN--------------")

    def can_execute(self):
        if not self._is_closed:
            self._open_until = self._opened_since + timedelta(seconds=self._reset_timeout)
            self._open_remaining = (self._open_until - datetime.utcnow()).total_seconds()
            return self._open_remaining <= 0
        else:
            return True

    def __call__(self, func):
        if self._name is None:
            self._name = func.__name__

        G_CB_MAP[self._name] = self

        @wraps(func)
        def with_circuitbreaker(*args, **kwargs):
            return self.call(func, *args, **kwargs)

        return with_circuitbreaker

    def call(self, func, *args, **kwargs):
        if not self.can_execute():
            err = 'CircuitBreaker[%s] is OPEN until %s (%d failures, %d sec remaining)' % (
                self._name,
                self._open_until,
                self._failure_count,
                round(self._open_remaining)
            )
            raise Exception(err)

        try:
            result = func(*args, **kwargs)
        except self._expected_exception:
            self._failure_count += 1
            if self._failure_count >= self._max_failure_to_open:
                r.lrem("PortList", 1, args[2])
                self.open()
            raise

        self.close()
        return result

