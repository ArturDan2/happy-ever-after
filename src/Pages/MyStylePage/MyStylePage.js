import React, {useEffect, useState} from 'react';
import "./Styles/MyStyleStyles.scss";
import { pins } from './pins';

const MyStylePage = () => {

    const [animPage, setAnimatePage] = useState()

    useEffect(() => {
        const script = document.createElement('script')
        script.async = true
        script.type = 'text/javascript'
        script.dataset.pinBuild = 'doBuild'
        script.src = '//assets.pinterest.com/js/pinit.js'
        document.body.appendChild(script)
        if (window.doBuild) window.doBuild()
        setAnimatePage(true);
      }, [])
  
      return (
    <div className={`my-style-page slide-in sub-page`}>
        <div className='my-style-page__header-container'>
            <h1>Mój styl</h1>
                <p>
                Organizacja Ślubu i Wesela jest wyjątkowym i ekscytującym czasem, może jednak bywać stresująca. Dlatego w swojej pracy 
                stawiam na swobodę i miłą atmosferę. Zależy mi, żeby Wasze wspomnienia z przygotowań były przyjemne i niezapomniane. 
                Jestem otwarta na wszystkie Wasze pomysły, a przez tę porcję zdjęć chciałabym pokazać wam w jakiej stylistyce czuję się najlepiej. 
                Razem sprawimy, aby ten dzień wyglądał dokładnie tak jak sobie wymarzyliście!
                </p>
        </div>
        <div className="my-style-page__pins">
                {pins.map((pin)=> {
                    return <div key={pin} className="my-style-page__instax"><a className="my-style-page__pin" data-pin-width="medium" data-pin-do="embedPin" data-pin-lang="pl" data-pin-terse="true" href={pin}></a></div>
                })}
        </div>
    </div>
  )
}

export default MyStylePage