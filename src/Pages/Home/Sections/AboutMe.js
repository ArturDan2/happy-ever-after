import React, {useEffect} from 'react';
import me from '../../../images/o-mnie-resized.jpg'
//roturer
import { Link } from 'react-router-dom';
import {useInView} from 'react-intersection-observer'

const AboutMe = () => {
  
  const [element, inView] = useInView({threshold: 0.1, triggerOnce: true})
  
  return (
    <section ref={element} className={`about-me ${inView ? "animate" : ''}`}>
        <div className='flex-col about-me__text-container'>
            <h2 className='about-me__heading migra bold'>O mnie</h2>
            <p className='about-me__p'>Połączenie mojej romantycznej duszy ze skłonnością do perfekcyjnego planowania wszystkiego z
najdrobniejszymi szczegółami sprawia, że mogę z dumą powiedzieć, iż jestem dobra w tym, co robię.
Otaczanie się Waszą miłością i szczęściem daje mi wielką radość oraz motywację do pracy i nieustannego
rozwoju. Mogę więc śmiało powiedzieć, że towarzyszenie Wam na drodze do upragnionego Happy Ever
After będzie dla mnie ogromnym zaszczytem.
            </p>
            <Link to="/o-mnie"><button>Dowiedz się więcej</button></Link>
        </div>
        <div className='about-me__pic-container'>
            <img className="about-me__pic" src={me} alt='Portret organizatorki ślubów - właścicielki firmy Happy Ever After.'></img>
        </div>
    </section>
  )
}

export default AboutMe