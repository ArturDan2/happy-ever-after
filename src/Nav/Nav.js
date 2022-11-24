import React, {useState} from 'react';
import './NavStyles.scss'
import logo from "../images/logo_simplified3.png"
import { useEffect } from 'react';

const Nav = ({navVisible}) => {

  const [isOpen, setIsOpen] = useState(false)
  
  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);


  return (
    <div className={`nav-container ${navVisible ? "visible" : "hidden"} ${offset !== 0 ? "sticky" : "static"}`}>
      <div className="deskopt-nav">
        <ul className="flex-row space-around nav">
            <li>Home</li>
            <li>O mnie</li>
            <li>Poznaj mój styl</li>
            <div className="logo-container">
              <img src={logo}></img>
            </div>
            <li>Oferta</li>
            <li>Jak pracuję</li>
            <li>Kontakt</li>
        </ul>
      </div>
      <div className="mobile-nav">
        <div onClick={() => setIsOpen(!isOpen)} className={`nav-btn ${offset !== 0 ? "sticky" : "static"} ${isOpen ? "open" : "closed"}`}>
          <span className="stripe-1"></span>
          {/* <span className="stripe-2"></span> */}
          <span className="stripe-2"></span>
        </div>
        <div className="logo-container">
          <img src={logo}></img>
        </div>
        <ul className={`flex-col space-around nav ${isOpen ? "open" : "closed"}`}>
            <li>Home</li>
            <li>O mnie</li>
            <li>Poznaj mój styl</li>
            <li>Oferta</li>
            <li>Jak pracuję</li>
            <li>Kontakt</li>
        </ul>
      </div>
    </div>
  )
}

export default Nav