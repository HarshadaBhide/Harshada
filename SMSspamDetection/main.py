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
import timeit

#------------------------------Step 1 Data Loading ------------------------------------------
messages = [line.rstrip() for line in open('./data/SMSSpamCollection')]
print("length = ", len(messages))

#print first 10 messages
for message_no, message in enumerate(messages[:10]):
    print (message_no, message)
    
messages = pandas.read_csv('./data/SMSSpamCollection', sep='\t', quoting=csv.QUOTE_NONE,
                           names=["label", "message"])
#print (messages.encode("utf-8"))
#print(messages)    

#------------------------------Step 2 Data analyzing ------------------------------------------

print("----------------------------")
print(messages.groupby('label').describe())
print("----------------------------")

messages['length'] = messages['message'].map(lambda text: len(text))
print (messages.head())

messages.length.plot(bins=20, kind='hist')
plt.xlabel("SMS Length")
pylab.show()

print("----------------------------")
print( messages.length.describe() )
print("----------------------------")

print("---------------------Longest message-------------")
print ( list(messages.message[messages.length > 900]) )
print("----------------------------")

#difference in message lengths between ham and spam
messages.hist(column='length', by='label', bins=50)
pylab.show()

#------------------------------Step 3 Data Preprocessing ------------------------------------------
def split_into_tokens(message):
    #message = unicode(message, 'utf8')  # convert bytes into proper unicode  for python 2.7
    #message = message.decode(encoding='UTF-8')  #python 3.5
    return TextBlob(message).words

print(messages.message.head())

print(TextBlob("Hello world, how is it going?").tags)  # list of (word, POS) pairs

def split_into_lemmas(message):
   # message = unicode(message, 'utf8').lower()
    words = TextBlob(message).words
    # for each word, take its "base form" = lemma 
    return [word.lemma for word in words]

print("----------------------3------------------")
print( messages.message.head().apply(split_into_lemmas)) 

print( messages.message.head().apply(split_into_tokens) )

#------------------------------Step 4 Convert Data into Vectors------------------------------------------
#Each vector has as many dimensions as there are unique words in the SMS corpus
bow_transformer = CountVectorizer(analyzer=split_into_lemmas).fit(messages['message'])
print ("unique words = ", len(bow_transformer.vocabulary_))

#sample processing 1 word
message4 = messages['message'][3]
print ("sample message = ", message4)

bow4 = bow_transformer.transform([message4])
print( "unique words and their no. of appearances =  ")
print (bow4)
print (bow4.shape)

print("The words which appear twice are : ")
print (bow_transformer.get_feature_names()[4191])
print (bow_transformer.get_feature_names()[9282])

#now do for entire message collection
messages_bow = bow_transformer.transform(messages['message'])
print ('sparse matrix shape:', messages_bow.shape)
print ('number of non-zeros:', messages_bow.nnz)
print ('sparsity: %.2f%%' % (100.0 * messages_bow.nnz / (messages_bow.shape[0] * messages_bow.shape[1])) )

#weighing and normalization
tfidf_transformer = TfidfTransformer().fit(messages_bow)
tfidf4 = tfidf_transformer.transform(bow4)
print (tfidf4)

print (tfidf_transformer.idf_[bow_transformer.vocabulary_['u']])
print (tfidf_transformer.idf_[bow_transformer.vocabulary_['university']])

messages_tfidf = tfidf_transformer.transform(messages_bow)
print ( messages_tfidf.shape)
print("------------------data preprocessing done -------------------------")

#------------------------------Step 5 Training Model------------------------------------------
#scikit-learn used for  Naive Bayes 
def NaiveBayes():
    spam_detector = MultinomialNB().fit(messages_tfidf, messages['label'])
    return spam_detector

#total_time = timeit.timeit( "NaiveBayes()", setup="from __main__ import NaiveBayes")
#print( "Time taken = ", total_time)
spam_detector = MultinomialNB().fit(messages_tfidf, messages['label'])
#testing sample message
print ('predicted:', spam_detector.predict(tfidf4)[0])
print ('expected:', messages.label[3] )

#testing all messages
all_predictions = spam_detector.predict(messages_tfidf)
print (all_predictions)

print (" ----------------------------Results for testing on same data -------------------------")
print ('accuracy', accuracy_score(messages['label'], all_predictions) )
print ('confusion matrix\n', confusion_matrix(messages['label'], all_predictions) )
print ('(row=expected, col=predicted)' )

plt.matshow(confusion_matrix(messages['label'], all_predictions), cmap=plt.cm.binary, interpolation='nearest')
plt.title('confusion matrix')
plt.colorbar()
plt.ylabel('expected label')
plt.xlabel('predicted label')
pylab.show()

print ( classification_report(messages['label'], all_predictions) )

# store the spam detector to disk after training
with open('TrainFull.pkl', 'wb') as fout:
    pickle.dump(spam_detector, fout)
#------------------------------------Done part 1 ------------------------------------------------
if __name__=='__main__':
    print( " End of program")
