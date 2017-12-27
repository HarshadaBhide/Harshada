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
    
    plot_learning_curve(pipeline, "accuracy vs. training set size", msg_train, label_train, cv=5)
    pylab.show()
    
    # store the spam detector to disk after training
with open('TrainAndTestSplit.pkl', 'wb') as fout:
    pickle.dump(spam_detector, fout)

#-----------------------------------------------------------------------------------
def plot_learning_curve(estimator, title, X, y, ylim=None, cv=None,
                        n_jobs=-1, train_sizes=np.linspace(.1, 1.0, 5)):
    plt.figure()
    plt.title(title)
    if ylim is not None:
        plt.ylim(*ylim)
    plt.xlabel("Training examples")
    plt.ylabel("Score")
    train_sizes, train_scores, test_scores = learning_curve(
        estimator, X, y, cv=cv, n_jobs=n_jobs, train_sizes=train_sizes)
    train_scores_mean = np.mean(train_scores, axis=1)
    train_scores_std = np.std(train_scores, axis=1)
    test_scores_mean = np.mean(test_scores, axis=1)
    test_scores_std = np.std(test_scores, axis=1)
    plt.grid()
 
    plt.fill_between(train_sizes, train_scores_mean - train_scores_std,
                     train_scores_mean + train_scores_std, alpha=0.1,
                     color="r")
    plt.fill_between(train_sizes, test_scores_mean - test_scores_std,
                     test_scores_mean + test_scores_std, alpha=0.1, color="g")
    plt.plot(train_sizes, train_scores_mean, 'o-', color="r",
             label="Training score")
    plt.plot(train_sizes, test_scores_mean, 'o-', color="g",
             label="Cross-validation score")
 
    plt.legend(loc="best")
    return plt
 
#---------------------------------------------------------------------
if __name__=='__main__':
    print( " End program 2")
    split_process()
