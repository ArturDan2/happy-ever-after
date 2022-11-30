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
                Cieszę się, że trafiliście właśnie do mnie! W mojej pracy cenię sobie swobodę, zorganizowanie i zaufanie.
                Już od samego początku lubię określić plan działania i kroki, jakie podejmiemy podczas przygotowań do
                Waszego Dnia Ślubu. Wspólnie stworzymy cudowne wydarzenie, które Wy oraz Goście zapamiętacie na
                długie lata.
                </p>
                <p>
                Zapraszam na niezobowiązujące, bezpłatne spotkanie, na którym się poznamy i przedstawię Wam moją
                ofertę. Możemy spotkać się osobiście lub online poprzez praformy multimedialne.
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