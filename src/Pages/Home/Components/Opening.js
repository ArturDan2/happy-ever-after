import React,{useState, useEffect} from 'react'
import twigs from '../../../images/logo-warstwy/gałązki-białe.png';
import ring from "../../../images/logo-warstwy/obrączki-białe.png";
import text from "../../../images/logo-warstwy/napis_biały.png";

const Opening = () => {

  const animated = !!sessionStorage.getItem("animated");

  useEffect(()=> {
    if (animated === false) {
      sessionStorage.setItem("animated", true);
    };
    console.log(animated)
  },[])

  return (
    <div className="flex-col opening-container">
      <div className={`background ${animated ? "noanim" : "anim" }`}>
        <div className="logo-layer">
          <div className={`logo-container ${animated ? "noanim" : "anim" }`}>
            <img className="twigs" src={twigs}></img>
            <img className="ring" src={ring}></img>
            <img className="text"src={text}></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Opening