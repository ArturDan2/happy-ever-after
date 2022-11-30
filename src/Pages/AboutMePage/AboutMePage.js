import React from 'react';
import me from "../../images/o-mnie.jpg"
//styles
import "./Styles/AboutMeStyles.scss"

const AboutMePage = () => {
  return (
    <div className='main-aboutme slide-in sub-page'>
        <div className="heading">
            <h2>Kim jestem?</h2>
            <div className='pic-container'>
                <img src={me} alt='zdjęcie właścicielki firmy'></img>
            </div>
        </div>
        <div className="text">
            <p>
                Myśl o zastaniu Wedding Plannerką zrodziła się w mojej głowie już w liceum, kiedy to towarzyszyłam
                siostrze w organizacji jej wesela. Później przygotowywanie tego typu wydarzeń przerodziło się w pasję i
                pomysł na przyszły zawód. Dzisiaj już jako certyfikowana Wedding Plannerka mogę powiedzieć, że z
                nieśmiałego kiedyś marzenia nastolatki zrodziło się coś naprawdę poważnego i pięknego.
            </p>
            <p>
                Połączenie mojej romantycznej duszy ze skłonnością do perfekcyjnego planowania wszystkiego z
                najdrobniejszymi szczegółami sprawia, że mogę z dumą powiedzieć, iż jestem dobra w tym, co robię.
                Otaczanie się Waszą miłością i szczęściem daje mi wielką radość oraz motywację do pracy i nieustannego
                rozwoju. Mogę więc śmiało powiedzieć, że towarzyszenie Wam na drodze do upragnionego Happy Ever
                After będzie dla mnie ogromnym zaszczytem.
            </p>
            <p>
                Uwielbiam poznawać nowych ludzi i ich losy. Przyjemnością będzie dla mnie wpisanie się na kartę
                Waszej weselnej historii. I choć prywatnie za idealny uważam wieczór spędzony w kuchni, przy dobrej
                muzyce, książce i zapachu ciasta wydobywającego się z piekarnika, to jednak dla Was oderwę się od
                mojej bezpiecznej przystani i chętnie pomogę spełnić marzenie o idealnym ślubie i weselu.
            </p>
        </div>
    </div>
  )
}

export default AboutMePage