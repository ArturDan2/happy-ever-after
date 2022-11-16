import React from 'react';
import me from '../../../images/me.jpeg'
//roturer
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <div className="aboutme-container">
        <div className='flex-col text-container'>
            <h2>O mnie</h2>
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