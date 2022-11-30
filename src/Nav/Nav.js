import React, {useState} from 'react';
import './NavStyles.scss';
import logo from "../images/logo_simplified3.png";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [offset, setOffset] = useState(0);
  const location = useLocation();
  const animated = !!sessionStorage.getItem("animated");


  useEffect(() => {
      const onScroll = () => {setOffset(window.pageYOffset)}
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(()=>{
    setIsOpen(false)
  },[location])

  return (
    <div className={`nav-container ${animated ? "" : "anim"} ${offset !== 0 || location.pathname !== "/" || isOpen ? "sticky" : "static"}`}>
      <div className="deskopt-nav">
        <ul className="flex-row space-around nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="o-mnie">O mnie</Link></li>
            <li><Link to="/moj-styl">Poznaj mój styl</Link></li>
            <div className="logo-container">
              <img src={logo}></img>
            </div>
            <li><Link to="/oferta">Oferta</Link></li>
            <li><Link to="/jak-pracuje">Jak pracuję</Link></li>
            <li><Link to="/kontakt">Kontakt</Link></li>
        </ul>
      </div>
      <div className="mobile-nav">
        <div onClick={() => setIsOpen(!isOpen)} className={`nav-btn ${offset !== 0 || location.pathname !== "/" ? "sticky" : "static"} ${isOpen ? "open" : "closed"}`}>
          <span className="stripe-1"></span>
          <span className="stripe-2"></span>
        </div>
        <div className="logo-container">
          <img src={logo}></img>
        </div>
        <ul className={`flex-col space-around nav ${isOpen ? "open" : "closed"}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="o-mnie">O mnie</Link></li>
          <li><Link to="/moj-styl">Poznaj mój styl</Link></li>
          <li><Link to="/oferta">Oferta</Link></li>
          <li><Link to="/jak-pracuje">Jak pracuję</Link></li>
          <li><Link to="">Kontakt</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav