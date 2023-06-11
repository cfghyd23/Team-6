
import pickle
import streamlit as st
from PIL import Image
import streamlit as st
st.write('Hello world from Team RaktConnect, This is our CFG project - `RaktConnect`')
#st.write('## Predciting Blood needs with `RaktConnect`')
st.write('## Time Series Analysis !! No problem `RaktConnect` is with you ')
st.write('our website `https://team-6.herokuapp.com/`')

#loading the trained model
pickle_in = open('classifier.pkl','rb')
classifier = pickle.load(pickle_in)

@st.cache



def main():
      #giving a title for our website
      st.title('RaktConnect - Predciting Future Is No More Magic')
      image = Image.open('img2.png')
      st.image(image, caption='Trends Analysis')
      image2 = Image.open('img1.png')
      st.image(image2, caption='Preictions')


if __name__ == '__main__':
    main()
    
