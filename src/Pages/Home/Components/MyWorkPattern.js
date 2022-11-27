import React from 'react';
import workpatternpic from '../../../images/work2.jpg';
import { Link } from 'react-router-dom';

const MyWorkPattern = () => {
  return (
    <div className="workpattern-container">
        <div className='pic-container'>
            <img src={workpatternpic} alt='zdjęcie właścicielki firmy2'></img>
        </div>
        <div className='flex-col text-container'>
            <h2 className="bold">Jak pracuję?</h2>
            <p>Cieszę się, że trafiliście właśnie do mnie! W mojej pracy cenię sobie swobodę, zorganizowanie i zaufanie.
Już od samego początku lubię określić plan działania i kroki, jakie podejmiemy podczas przygotowań do
Waszego Dnia Ślubu. Wspólnie stworzymy cudowne wydarzenie, które Wy oraz Goście zapamiętacie na
długie lata.
Zapraszam na niezobowiązujące, bezpłatne spotkanie, na którym się poznamy i przedstawię Wam moją
ofertę. Możemy spotkać się osobiście lub online poprzez praformy multimedialne.
            </p>
            <Link to={"/jak-pracuje"}><button>Dowiedz się więcej</button></Link>
        </div>
    </div>
  )
}

export default MyWorkPattern