import React from 'react';
import workpatternpic from '../../../images/work.jpg';
import { Link } from 'react-router-dom';
import {useInView} from 'react-intersection-observer'

const MyWorkPattern = () => {

  const [element, inView] = useInView({threshold: 0.1, triggerOnce: true})
  
  return (
    <section ref={element} className={`work-pattern ${inView ? "animate" : ""}`}>
        <div className='work-pattern__pic-container'>
            <img className="work-pattern__pic" src={workpatternpic} alt='Organizatorka ślubów w trakcie pracy przy komputerze.'></img>
        </div>
        <div className='flex-col work-pattern__text-container'>
            <h2 className="work-pattern__heading migra bold">Jak pracuję?</h2>
            <p className="work-pattern__p">Cieszę się, że trafiliście właśnie do mnie! W mojej pracy cenię sobie swobodę, zorganizowanie i zaufanie.
Już od samego początku lubię określić plan działania i kroki, jakie podejmiemy podczas przygotowań do
Waszego Dnia Ślubu. Wspólnie stworzymy cudowne wydarzenie, które Wy oraz Goście zapamiętacie na
długie lata.
Zapraszam na niezobowiązujące, bezpłatne spotkanie, na którym się poznamy i przedstawię Wam moją
ofertę. Możemy spotkać się osobiście lub online poprzez praformy multimedialne.
            </p>
            <Link to={"/jak-pracuje"}><button>Dowiedz się więcej</button></Link>
        </div>
    </section>
  )
}

export default MyWorkPattern