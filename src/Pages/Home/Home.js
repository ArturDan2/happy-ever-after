import React, {useRef, useEffect} from 'react';
import "./Styles/HomeStyles.scss";
import Opening from './Components/Opening';
import AboutMe from './Components/AboutMe';
import Offer from './Components/Offer';
import MyStyle from './Components/MyStyle';
import MyWorkPattern from './Components/MyWorkPattern';
import ContactForm from './Components/ContactForm';
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