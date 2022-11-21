import React, {useState} from 'react'

const OfferOption = ({offerDetails}) => {

    const [isExpanded, setIsExpanded] = useState(false);
    
    const hasList = () => {
        let hasList = null
        if(offerDetails.list_title){
            hasList = true
        }else{
            hasList = false
        }
        return hasList
    }
    console.log(hasList())
    return (
    <section className='offer-section'>
        <div className='picture-container'></div>
        <div className='text-container'>
            <h3>{offerDetails.title}</h3>
            <p>{offerDetails.paragraph}</p>
            {hasList () ? 
            <div>
            <div className="list-title">
                <h4>{offerDetails.list_title}</h4>
                <button onClick={(e)=> {setIsExpanded(!isExpanded)}} className="expand-button"> expand </button>
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