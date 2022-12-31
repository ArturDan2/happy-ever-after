import React, {useRef, useEffect} from 'react';
import "./Styles/HomeStyles.scss";
import Opening from './Sections/Opening';
import AboutMe from './Sections/AboutMe';
import Offer from './Sections/Offer';
import MyStyle from './Sections/MyStyle';
import MyWorkPattern from './Sections/MyWorkPattern';
import ContactForm from './Sections/ContactForm';
//router
import { useLocation } from 'react-router-dom';
//helmet
import HelmetComponent from '../../SEO/HelmetComponent';
import ogpic from '../../SEO/og-picture.png';



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
      <HelmetComponent 
            title='Happy Ever After - Organizacja ślubów i wesel w Poznaniu'
            description='Organizacja ślubów na terenie Poznania i okolic. Skorzystaj z usługi kompleksowej lub częściowej organizacji ślubu z pomocą wedding plannera.'
            type='webstie'
            img={`${window.location.origin + ogpic}`}
      />
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