import React from 'react';
import { Link } from 'react-router-dom';

const Offer = () => {
  return (
    <section className='offer'>
        <div className='offer__background'>
            <div className='offer__box'>
                <h2 className='offer__heading migra light'>All about you</h2>
                <p className="offer__p">Sprawdź ofertę moich usług</p>
                <Link to={'/oferta'}><button className='offer__button'>OFERTA</button></Link>
            </div>
        </div>
    </section>
  )
}

export default Offer