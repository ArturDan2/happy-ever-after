import React,{useEffect, useRef} from 'react'
import twigs from '../../../images/logo-warstwy/galazki.png';
import ring from "../../../images/logo-warstwy/obraczki.png";
import text from "../../../images/logo-warstwy/napis.png";

const Opening = () => {

  const animated = !!sessionStorage.getItem("animated");
  const picRef = useRef()
  useEffect(()=> {
    if (animated === false) {
      sessionStorage.setItem("animated", true);
    };
  },[])

  return (
    <section className="flex-col opening">
      <div ref={picRef} className={`opening__background ${animated ? "opening__background--noanim" : "opening__background--anim" }`}>
        <div className="opening__logo-layer">
          <div className={`opening__logo-container ${animated ? "noanim" : "anim" }`}>
            <img className="opening__twigs" src={twigs}></img>
            <img className="opening__ring" src={ring}></img>
            <img className="opening__text"src={text}></img>
          </div>
          <h1 className={`${animated ? "noanim" : "anim" }`}>Organizacja ślubu</h1>
        </div>
      </div>
    </section>
  )
}

export default Opening