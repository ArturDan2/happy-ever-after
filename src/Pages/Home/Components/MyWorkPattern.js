import React from 'react';
import workpatternpic from '../../../images/workpattern.png';


const MyWorkPattern = () => {
  return (
    <div className="workpattern-container">
        <div className='pic-container'>
            <img src={workpatternpic} alt='zdjęcie właścicielki firmy2'></img>
        </div>
        <div className='flex-col text-container'>
            <h2>Jak pracuję?</h2>
            <p>Cieszę się, że trafiliście właśnie do mnie! W mojej pracy cenię sobie swobodę, zorganizowanie i zaufanie.
Już od samego początku lubię określić plan działania i kroki, jakie podejmiemy podczas przygotowań do
Waszego Dnia Ślubu. Wspólnie stworzymy cudowne wydarzenie, które Wy oraz Goście zapamiętacie na
długie lata.
Zapraszam na niezobowiązujące, bezpłatne spotkanie, na którym się poznamy i przedstawię Wam moją
ofertę. Możemy spotkać się osobiście lub online poprzez praformy multimedialne.
            </p>
            <button>Dowiedz się więcej</button>
        </div>
    </div>
  )
}

export default MyWorkPattern