from textblob import TextBlob
import pickle

def split_into_lemmas(message):
    words = TextBlob(message).words
    return [word.lemma for word in words]

def split_into_tokens(message):
    return TextBlob(message).words

print("Test Messages : ")
print("Message 1 : I am in the class. Where are you?")
print("Messages 2 : WINNER! You won a lottery with free entry. Credit for free! Please call our customer service representative")

with open('lemmatization.pkl', 'rb') as f:
    bayes_production = pickle.load(f)
print("Multinomial Naive Bayes predictions : ")     
print (bayes_production.predict(["I am in the class. Where are you?"])[0])
print (bayes_production.predict(["WINNER! You won a lottery with free entry. Credit for free! Please call our customer service representative"])[0])

with open('svm.pkl', 'rb') as f:
    svm_production = pickle.load(f) 
print("SVM predictions : ")
print (svm_production.predict(["I am in the class. Where are you?"])[0])
print (svm_production.predict(["WINNER! You won a lottery with free entry. Credit for free! Please call our customer service representative"])[0])

with open('decisionTree.pkl', 'rb') as f:
    svm_production = pickle.load(f) 
print("Decision Tree predictions : ")
print (svm_production.predict(["I am in the class. Where are you?"])[0])
print (svm_production.predict(["WINNER! You won a lottery with free entry. Credit for free! Please call our customer service representative "])[0])

    
if __name__=='__main__':
    print( " End of Demo")
    