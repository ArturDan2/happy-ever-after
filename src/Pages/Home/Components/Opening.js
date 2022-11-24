import React from 'react'
import twigs from '../../../images/logo-warstwy/gałązki-białe.png';
import ring from "../../../images/logo-warstwy/obrączki-białe.png";
import main from "../../../images/logo-warstwy/napis_główny-biały.png";
import sub from "../../../images/logo-warstwy/napis_pod-biały.png"
const Opening = () => {
  return (
    <div className="flex-col opening-container">
      <div className="background-container">
        <div className="logo-container">
          <img className="twigs" src={twigs}></img>
          <img className="ring" src={ring}></img>
          <img className="text"src={main}></img>
          <img className="text sub" src={sub}></img>
        </div>
      </div>
    </div>
  )
}

export default Opening