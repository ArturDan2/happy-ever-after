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
    <nav className={`nav-container ${animated ? "" : "anim"} ${offset !== 0 || location.pathname !== "/" ? "nav-container--sticky" : "nav-container--static"}`}>
      <div className="deskopt-nav">
        <ul className="deskopt-nav_list flex-row space-around">
            <li className="deskopt-nav_list_item"><Link to="/">Home</Link></li>
            <li className="deskopt-nav_list_item"><Link to="o-mnie">O mnie</Link></li>
            <li className="deskopt-nav_list_item"><Link to="/moj-styl">Poznaj mój styl</Link></li>
            <li className="deskopt-nav_list_item deskopt-nav_list_item--logo">
              <Link to="/"><img alt="Logo firmy Happy Ever After." src={logo}></img></Link>
            </li>
            <li className="deskopt-nav_list_item"><Link to="/oferta">Oferta</Link></li>
            <li className="deskopt-nav_list_item"><Link to="/jak-pracuje">Jak pracuję</Link></li>
            <li className="deskopt-nav_list_item"><Link to="/kontakt">Kontakt</Link></li>
        </ul>
      </div>
      <div className="mobile-nav">
        <div onClick={() => setIsOpen(!isOpen)} className={`mobile-nav_btn ${isOpen ? "mobile-nav_btn--open" : "mobile-nav_btn--closed"}`}>
          <span className="mobile-nav_btn_stripe-1"></span>
          <span className="mobile-nav_btn_stripe-2"></span>
        </div>
        <div className="mobile-nav_logo-container">
          <Link to="/"><img alt="Logo firmy Happy Ever After." src={logo}></img></Link>
        </div>
        <ul className={`mobile-nav_list flex-col ${isOpen ? "mobile-nav_list--open" : "mobile-nav_list--closed"}`}>
          <li className="mobile-nav_list_item"><Link to="/">Home</Link></li>
          <li className="mobile-nav_list_item"><Link to="o-mnie">O mnie</Link></li>
          <li className="mobile-nav_list_item"><Link to="/moj-styl">Poznaj mój styl</Link></li>
          <li className="mobile-nav_list_item"><Link to="/oferta">Oferta</Link></li>
          <li className="mobile-nav_list_item"><Link to="/jak-pracuje">Jak pracuję</Link></li>
          <li className="mobile-nav_list_item"><Link to="/kontakt">Kontakt</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav