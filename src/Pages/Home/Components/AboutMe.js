import React from 'react';
import me from '../../../images/o-mnie.jpg'
//roturer
import { Link } from 'react-router-dom';
import { useInView } from "react-intersection-observer";

const AboutMe = ({navVisible, setNavVisible}) => {


  const [element, view] = useInView({threshold: 0.9, triggerOnce: true})

  if(view === true){
    setNavVisible(true)
  }

  return (
    <div ref={element} view={view} className="aboutme-container">
        <div className='flex-col text-container'>
            <h2 className='bold'>O mnie</h2>
            <p>Połączenie mojej romantycznej duszy ze skłonnością do perfekcyjnego planowania wszystkiego z
najdrobniejszymi szczegółami sprawia, że mogę z dumą powiedzieć, iż jestem dobra w tym, co robię.
Otaczanie się Waszą miłością i szczęściem daje mi wielką radość oraz motywację do pracy i nieustannego
rozwoju. Mogę więc śmiało powiedzieć, że towarzyszenie Wam na drodze do upragnionego Happy Ever
After będzie dla mnie ogromnym zaszczytem.
            </p>
            <Link to="/o-mnie"><button>Dowiedz się więcej</button></Link>
        </div>
        <div className='pic-container'>
            <img src={me} alt='zdjęcie właścicielki firmy'></img>
        </div>
    </div>
  )
}

export default AboutMe