import React from 'react'
import OfferOption from './Components/OfferOption'
import { offers } from './offers'
//styles
import "./Styles/OfferStyles.scss"
//helmet
import HelmetComponent from '../../SEO/HelmetComponent';
import ogpic from '../../SEO/og-picture.png';



const OfferPage = () => {
    return (
    <div className='offer-page slide-in sub-page'>
        <HelmetComponent 
            title='Oferta -  Organizacja ślubów i wesel w Poznaniu | Happy Ever After'
            description='Poznaj ofertę usług dotyczących organizacji ślubów i wesel na terenie Poznania - 
            Kompleksowa organizacja ślubu i wesela | Częściowa organizacja ślubu i wesela | Koordynacja Dnia Ślubu i Wesela | 
            Typowawanie lokalizacji na przyjęcie weselne'
            type='webstie'
            img={ogpic}
        />
        <h1 className="offer-page__heading">Oferta</h1>
        {offers.map((offer)=>{
            return <OfferOption key={offers.indexOf(offer)} offerDetails={offer}/>
        })}
    </div>
    )
    }

export default OfferPage