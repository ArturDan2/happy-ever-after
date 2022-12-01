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
    <section className='offer-section'>
        <div className='picture-container'>
            <img src={pic}></img>
        </div>
        <div className='text-container'>
            <h3>{offerDetails.title}</h3>
            <p>{offerDetails.paragraph}</p>
            {hasList () ? 
            <div>
            <div className="list-title">
                <h4>{offerDetails.list_title}</h4>
                <button onClick={(e)=> {setIsExpanded(!isExpanded)}} className={`expand-button ${isExpanded ? "expanded" : "unexpanded"}`}>
                    <div>
                        <span className="left-bar"></span>
                        <span className="right-bar"></span>
                    </div>
                </button>
            </div>
            <ul className={`expandable-list ${isExpanded ? "expanded" : "unexpanded"}`}>
                {offerDetails.list_items.map((item)=>{
                    return <li>{item}</li>
                })}
            </ul>
        </div> : null}
        </div>
    </section>
  )
}

export default OfferOption