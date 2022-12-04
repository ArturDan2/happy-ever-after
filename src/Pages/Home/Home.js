import React, {useRef, useEffect} from 'react';
import "./Styles/HomeStyles.scss";
import Opening from './Sections/Opening';
import AboutMe from './Sections/AboutMe';
import Offer from './Sections/Offer';
import MyStyle from './Sections/MyStyle';
import MyWorkPattern from './Sections/MyWorkPattern';
import ContactForm from './Sections/ContactForm';
import { useLocation } from 'react-router-dom';



const Home = () => {

  const {pathname} = useLocation();
  const contactRef = useRef();
  useEffect(()=>{
    if(pathname === "/kontakt"){
      window.scroll({ top: (contactRef.current.offsetTop), left: 0, behavior: 'smooth' })
    }
  },[pathname])
  
  return (
    <div className='home-container'>
      <Opening></Opening>
      <AboutMe></AboutMe>
      <Offer></Offer>
      <MyStyle></MyStyle>
      <MyWorkPattern></MyWorkPattern>
      <ContactForm ref={contactRef}></ContactForm>
    </div>
  )
}

export default Home