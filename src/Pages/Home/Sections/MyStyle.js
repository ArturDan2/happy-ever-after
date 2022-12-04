import React from 'react';
import { Link } from 'react-router-dom';
import mystyle1 from "../../../images/hands.jpg"
import mystyle2 from "../../../images/field.jpg"
import mystyle3 from "../../../images/couple.jpg"
import {LazyLoadImage} from 'react-lazy-load-image-component'

const MyStyle = () => {
  return (
    <section className='mystyle-container flex-row space-around'>
        <div className='visual-container'>
          <div className='pics'>
            <div className='pic'><LazyLoadImage effect="blur" src={mystyle2} alt="Para nowożeńców na tle zachodzącego słońca." width="100%" height="100%"/></div>
            <div className='pic rounded'><LazyLoadImage effect="blur" src={mystyle1} alt="Dłonie pary młodej na tle bukietu kwiatów, wraz z wyeksponowanymi obrączkami." width="100%" height="100%"/></div>
            <div className='pic'><LazyLoadImage effect="blur" src={mystyle3} alt="Trzymająca się za ręće para młoda na tle pola trawy." width="100%" height="100%"/></div>
          </div>
          <div className="header-and-button">
            <h2 className="migra light">Poznaj mój styl</h2>
            <Link to={"/moj-styl"}><button className='small-device'>ZOBACZ WIĘCEJ</button></Link>
          </div>
        </div>
        <Link to={"/moj-styl"}><button className='large-device'>ZOBACZ WIĘCEJ</button></Link>
    </section>
  )
}

export default MyStyle