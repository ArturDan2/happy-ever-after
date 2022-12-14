import React, {useState} from 'react';
import img from "../../../images/organizacja.jpg"

const OfferOption = ({offerDetails}) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const pic = require(`../../../images/`+ offerDetails.picture)


    const hasList = () => {
        let hasList = null
        if(offerDetails.list_title){
            hasList = true
        }else{
            hasList = false
        }
        return hasList
    }

    return (
    <section className='offer-option'>
        <div className='offer-option__picture-container'>
            <img alt={offerDetails.alt} src={pic}></img>
        </div>
        <div className='offer-option__text-container'>
            <h2>{offerDetails.title}</h2>
            <p>{offerDetails.paragraph}</p>
            {hasList () ? 
            <div>
            <div className="offer-option__list-title">
                <h3>{offerDetails.list_title}</h3>
                <button onClick={(e)=> {setIsExpanded(!isExpanded)}} className={`offer-option__expand-button ${isExpanded ? "expanded" : "unexpanded"}`}>
                    <div>
                        <span className="left-bar"></span>
                        <span className="right-bar"></span>
                    </div>
                </button>
            </div>
            <ul className={`offer-option__expandable-list ${isExpanded ? "expanded" : "unexpanded"}`}>
                {offerDetails.list_items.map((item)=>{
                    return <li key={offerDetails.list_items.indexOf(item)}>{item}</li>
                })}
            </ul>
        </div> : null}
        </div>
    </section>
  )
}

export default OfferOption