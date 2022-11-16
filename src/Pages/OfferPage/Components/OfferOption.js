import React, {useState} from 'react'

const OfferOption = ({offerDetails}) => {

    const [isExpanded, setIsExpanded] = useState(false);

    return (
    <section className='offer-section'>
        <div className='picture-container'></div>
        <div className='text-container'>
            <h3>{offerDetails.title}</h3>
            <p>{offerDetails.paragraph}</p>
            <div>
                <div className="list-title">
                    <h4>{offerDetails.list_title}</h4>
                    <button onClick={()=> setIsExpanded(!isExpanded)} className="expand-button"> expand </button>
                </div>
                <ul className={`expandable-list ${isExpanded ? "expanded" : "unexpanded"}`}>
                    {offerDetails.list_items.map((item)=>{
                        return <li>{item}</li>
                    })}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default OfferOption