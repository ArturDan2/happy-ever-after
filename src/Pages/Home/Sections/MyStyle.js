import React from 'react';
import { Link } from 'react-router-dom';
import mystyle1 from "../../../images/hands.jpg"
import mystyle2 from "../../../images/field.jpg"
import mystyle3 from "../../../images/couple.jpg"
import {LazyLoadImage} from 'react-lazy-load-image-component'

const MyStyle = () => {
  return (
    <section className='my-style flex-row space-around'>
        <div className='my-style__decorative-container'>
          <div className='my-style__pic-wrapper'>
            <div className='my-style__pic'><LazyLoadImage effect="blur" src={mystyle2} alt="Para nowożeńców na tle zachodzącego słońca." width="100%" height="100%"/></div>
            <div className='my-style__pic my-style__pic--rounded'><LazyLoadImage effect="blur" src={mystyle1} alt="Dłonie pary młodej na tle bukietu kwiatów, wraz z wyeksponowanymi obrączkami." width="100%" height="100%"/></div>
            <div className='my-style__pic'><LazyLoadImage effect="blur" src={mystyle3} alt="Trzymająca się za ręće para młoda na tle pola trawy." width="100%" height="100%"/></div>
          </div>
          <div className="my-style__heading-wrapper">
            <h2 className="migra light">Poznaj mój styl</h2>
            <Link to={"/moj-styl"}><button className='my-style__button--small-device'>ZOBACZ WIĘCEJ</button></Link>
          </div>
        </div>
        <Link to={"/moj-styl"}><button className='my-style__button--large-device'>ZOBACZ WIĘCEJ</button></Link>
    </section>
  )
}

export default MyStyle