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
    <div className={`main-container slide-in sub-page`}>
        <div className='heading'>
            <h2>Mój styl</h2>
            <div className="text">
                <p>
                Organizacja Ślubu i Wesela jest wyjątkowym i ekscytującym czasem, może jednak bywać stresująca. Dlatego w swojej pracy 
                stawiam na swobodę i miłą atmosferę. Zależy mi, żeby Wasze wspomnienia z przygotowań były przyjemne i niezapomniane. 
                Jestem otwarta na wszystkie Wasze pomysły, a przez tę porcję zdjęć chciałabym pokazać wam w jakiej stylistyce czuję się najlepiej. 
                Razem sprawimy, aby ten dzień wyglądał dokładnie tak jak sobie wymarzyliście!
                </p>
            </div>
        </div>
        <div className="pins">
                {pins.map((pin)=> {
                    return <div className="instax"><a className="pin" data-pin-width="medium" data-pin-do="embedPin" data-pin-lang="pl" data-pin-terse="true" href={pin}></a></div>
                })}
        </div>
    </div>
  )
}

export default MyStylePage