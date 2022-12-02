import React from 'react'
import OfferOption from './Components/OfferOption'
import { offers } from './offers'
import "./Styles/OfferStyles.scss"

const OfferPage = () => {
    return (
    <div className='main-container slide-in sub-page'>
        <h1>Oferta</h1>
        {offers.map((offer)=>{
            return <OfferOption key={offers.indexOf(offer)} offerDetails={offer}/>
        })}
    </div>
    )
    }

export default OfferPage