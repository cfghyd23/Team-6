
import pickle
import streamlit as st
st.write('Hello world from Team RaktConnect, This is our CFG project - `RaktConnect`')
#st.write('## Predciting Blood needs with `RaktConnect`')
st.write('## Time Series Analysis !! No problem `RaktConnect` is with you ')
st.write('our website `https://team-6.herokuapp.com/`')

#loading the trained model
pickle_in = open('classifier.pkl','rb')
classifier = pickle.load(pickle_in)

@st.cache


def fb1_prediction(user_inp):
      future_dates=classifier.make_future_dataframe(periods=user_inp)
      predict1 = classifier.predict(future_dates)
      print(predict1)
      classifier.plot_components(predict1)
      return predict1

def plot_components(user_inp):
      future_dates=classifier.make_future_dataframe(periods=user_inp)
      predict1=classifier.predict(future_dates)
      predict2=st.area_chart(predict1.trend)
      predict2=st.line_chart(predict1.trend)
      return predict2

def main():
      #giving a title for our website
      st.title('RaktConnect - Predciting Future Is No More Magic')
      #GET INPUT FROM THE USER
      user_inp = st.text_input("Number of days","type here")
      #code for prediction
      result = ""
      result2 = ""

      #creating button for prediction

      if st.button("Future Stock Price"):
          result=fb1_prediction(int(user_inp))
          #future_dates=classifier.make_future_dataframe(periods=365)
          #predict1=classifier.predict(future_dates)
          #classifier.plot(predict1)
          #diagnosis=fb1_prediction(user_inp)

      st.success('The output is {}'.format(result))

      if st.button("Plot For Different Stocks Price"):
          result2=plot_components(int(user_inp))

      st.success('The graph is {}'.format(result2))

if __name__ == '__main__':
    main()
    
