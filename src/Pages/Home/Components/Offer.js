import React from 'react';
import { Link } from 'react-router-dom';

const Offer = () => {
  return (
    <div className='offer-container'>
        <div className='background-container flex-col'>
            <div className='flex-col'>
                <h2>All about you</h2>
                <p>Sprawdź ofertę moich usług</p>
                <Link to={'/oferta'}><button>OFERTA</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Offer