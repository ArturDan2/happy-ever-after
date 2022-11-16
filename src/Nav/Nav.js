import React, {useState} from 'react';
import './NavStyles.scss'
import logo from "../images/logo.png"

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="nav-container">
      <div className="deskopt-nav">
        <ul className="flex-row space-around nav">
            <li>Home</li>
            <li>O mnie</li>
            <li>Poznaj mój styl</li>
            <img src={logo}></img>
            <li>Oferta</li>
            <li>Jak pracuję</li>
            <li>Kontakt</li>
        </ul>
      </div>
      <div className="mobile-nav">
        <div onClick={() => setIsOpen(!isOpen)} className={`nav-btn ${isOpen ? "open" : "closed"}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="logo-container">
          <h1>happy ever after</h1>
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