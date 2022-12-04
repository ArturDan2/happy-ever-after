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
    <section className="flex-col opening-container">
      <div ref={picRef} className={`background ${animated ? "noanim" : "anim" }`}>
        <div className="logo-layer">
          <div className={`logo-container ${animated ? "noanim" : "anim" }`}>
            <img className="twigs" src={twigs}></img>
            <img className="ring" src={ring}></img>
            <img className="text"src={text}></img>
          </div>
          <h1 className={`${animated ? "noanim" : "anim" }`}>Organizacja ślubu</h1>
        </div>
      </div>
    </section>
  )
}

export default Opening