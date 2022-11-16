import React from 'react'
import OfferOption from './Components/OfferOption'
import { offers } from './offers'
import "./Styles/OfferStyles.scss"

const OfferPage = () => {
    return (
    <div className='main-container'>
        <h2>Oferta</h2>
        {offers.map((offer)=>{
            return <OfferOption offerDetails={offer}/>
        })}
    </div>
    )
    }

export default OfferPage