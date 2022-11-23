import React from 'react';
import "./Styles/HomeStyles.scss";
import Opening from './Components/Opening';
import AboutMe from './Components/AboutMe';
import Offer from './Components/Offer';
import MyStyle from './Components/MyStyle';
import MyWorkPattern from './Components/MyWorkPattern';
import ContactForm from './Components/ContactForm';



const Home = ({navVisible, setNavVisible}) => {

  return (
    <div className='home-container'>
      <Opening></Opening>
      <AboutMe navVisible={navVisible} setNavVisible={setNavVisible}></AboutMe>
      <Offer></Offer>
      <MyStyle></MyStyle>
      <MyWorkPattern></MyWorkPattern>
      <ContactForm></ContactForm>
    </div>
  )
}

export default Home