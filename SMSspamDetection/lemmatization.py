#%matplotlib inline
import matplotlib.pyplot as plt
import csv
from textblob import TextBlob
import pandas
import sklearn
#import cPickle     #comes with 2.7 as deffault lib
#import _pickle as cPickle #for 3.5
import pickle
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer, TfidfTransformer
from sklearn.naive_bayes import MultinomialNB
from sklearn.svm import SVC, LinearSVC
from sklearn.metrics import classification_report, f1_score, accuracy_score, confusion_matrix
from sklearn.pipeline import Pipeline
from sklearn.grid_search import GridSearchCV
from sklearn.cross_validation import StratifiedKFold, cross_val_score, train_test_split 
from sklearn.tree import DecisionTreeClassifier 
from sklearn.learning_curve import learning_curve
import pylab
import time

#------------------------------Step 1 Data Loading ------------------------------------------
messages = [line.rstrip() for line in open('./data/SMSSpamCollection')]
#print("length = ", len(messages))

    
messages = pandas.read_csv('./data/SMSSpamCollection', sep='\t', quoting=csv.QUOTE_NONE,
                           names=["label", "message"])

messages['length'] = messages['message'].map(lambda text: len(text))


#------------------------------Step 3 Data Preprocessing ------------------------------------------
def split_into_tokens(message):
    return TextBlob(message).words


def split_into_lemmas(message):
    words = TextBlob(message).words
    return [word.lemma for word in words]

messages.message.head().apply(split_into_lemmas) 

messages.message.head().apply(split_into_tokens)

#------------------------------Step 4 Convert Data into Vectors------------------------------------------
#Each vector has as many dimensions as there are unique words in the SMS corpus
bow_transformer = CountVectorizer(analyzer=split_into_lemmas).fit(messages['message'])

#sample processing 1 word
message4 = messages['message'][3]
bow4 = bow_transformer.transform([message4])

#now do for entire message collection
messages_bow = bow_transformer.transform(messages['message'])
#print ('sparse matrix shape:', messages_bow.shape)
#print ('number of non-zeros:', messages_bow.nnz)
#print ('sparsity: %.2f%%' % (100.0 * messages_bow.nnz / (messages_bow.shape[0] * messages_bow.shape[1])) )

#weighing and normalization
tfidf_transformer = TfidfTransformer().fit(messages_bow)
tfidf4 = tfidf_transformer.transform(bow4)

messages_tfidf = tfidf_transformer.transform(messages_bow)
#scikit-learn used for  Naive Bayes 
spam_detector = MultinomialNB().fit(messages_tfidf, messages['label'])
#------------------------------------Part 2: Splitting dataset 80:20  training:testing ------------------------------------------------
def split_process():
    print( "-----------------------Testing data split-------------------------")
    msg_train, msg_test, label_train, label_test = \
    train_test_split(messages['message'], messages['label'], test_size=0.2)

    print (len(msg_train), len(msg_test), len(msg_train) + len(msg_test))
    pipeline = Pipeline([
         ('bow', CountVectorizer(analyzer=split_into_lemmas)),  # strings to token integer counts
         ('tfidf', TfidfTransformer()),  # integer counts to weighted TF-IDF scores
         ('classifier', MultinomialNB()),  # train on TF-IDF vectors w/ Naive Bayes classifier
    ])
 
    scores = cross_val_score(pipeline,  # steps to convert raw messages into models
                          msg_train,  # training data
                          label_train,  # training labels
                          cv=10,  # split data randomly into 10 parts: 9 for training, 1 for scoring
                          scoring='accuracy',  # which scoring metric?
                          n_jobs=-1,  # -1 = use all cores = faster
                          )
    print ("scores = " ,scores)
 
    print ( scores.mean(), scores.std() )
 
    params = {
    'tfidf__use_idf': (True, False),
    'bow__analyzer': (split_into_lemmas, split_into_tokens),
    }
    
    grid = GridSearchCV(
        pipeline,  # pipeline from above
        params,  # parameters to tune via cross validation
        refit=True,  # fit using all available data at the end, on the best found param combination
        n_jobs=-1,  # number of cores to use for parallelization; -1 for "all cores"
        scoring='accuracy',  # what score are we optimizing?
        cv=StratifiedKFold(label_train, n_folds=5),  # what type of cross validation to use
    )
    start = time.time()
    nb_detector = grid.fit(msg_train, label_train)
    end = time.time()
    print( "Total time  = ", end - start)
    
    print (nb_detector.grid_scores_)
    print("------------sample test------------")
    print (nb_detector.predict_proba(["Hi mom, how are you?"])[0])
    print (nb_detector.predict_proba(["WINNER! Credit for free!"])[0])
    print (nb_detector.predict(["Hi mom, how are you?"])[0] )
    print (nb_detector.predict(["WINNER! Credit for free!"])[0] )
    
    predictions = nb_detector.predict(msg_test)
    plt.matshow(confusion_matrix(label_test, predictions), cmap=plt.cm.binary, interpolation='nearest')
    plt.title('confusion matrix')
    plt.colorbar()
    plt.ylabel('expected label')
    plt.xlabel('predicted label')
    pylab.show()
    print (confusion_matrix(label_test, predictions) )
    print (classification_report(label_test, predictions) )
    
    # store the spam detector to disk after training
    with open('lemmatization.pkl', 'wb') as fout:
        pickle.dump(nb_detector, fout)
#-----------------------------------------------------------------------------------
    
    
if __name__=='__main__':
    print( " started main")
    split_process()
