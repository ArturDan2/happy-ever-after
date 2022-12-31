import React from 'react';
//styles
import './Styles/WorkPatternStyles.scss';
//helmet
import HelmetComponent from '../../SEO/HelmetComponent';
import ogpic from '../../SEO/og-picture.png';

const WorkPatternPage = () => {
  return (
    <div className='work-pattern-page slide-in sub-page'>
        <HelmetComponent 
            title='Jak pracuję? - Organizacja ślubów i wesel w Poznaniu | Happy Ever After'
            description='Poznaj wzór, którym kieruję się przy organizacji ślubów i wesel. Zapraszam również na niezobowiązujące, bezpłatne spotkanie, na którym się poznamy i przedstawię Wam moją
            ofertę. Możemy spotkać się osobiście lub online poprzez platformy multimedialne.'
            type='webstie'
            img={`${window.location.origin + ogpic}`}
        />
        <div className='work-pattern-page__header-container'>
            <h1>Jak pracuję?</h1>
            <div className="work-pattern-page__text">
                <p>
                Szukacie organizatora ślubów działającego w Poznaniu i okolicach? Cieszę się, że trafiliście właśnie do mnie! W mojej pracy cenię sobie swobodę, zorganizowanie i zaufanie.
                Już od samego początku lubię określić plan działania i kroki, jakie podejmiemy podczas przygotowań do
                Waszego Dnia Ślubu. Wspólnie stworzymy cudowne wydarzenie, które Wy oraz Goście zapamiętacie na
                długie lata.
                </p>
                <p>
                Zapraszam na niezobowiązujące, bezpłatne spotkanie, na którym się poznamy i przedstawię Wam moją
                ofertę. Możemy spotkać się osobiście lub online poprzez platformy multimedialne. Pracuję głównie na terenie Poznania i okolic.
                </p>
            </div>
        </div>
        <div className="work-pattern-page__steps">
            <div className="work-pattern-page__step">
                <h2>KROK 1 : Spotkanie</h2>
                <ul>
                    <li>poproszę was o wspólne wypełnienie ankiety Pary Młodej, która pomoże mi określić wasze oczekiwania</li>
                    <li>porozmawiamy o Waszych inspiracjach</li>
                    <li>wspólnie omówimy styl, charakter i koncepcję Waszej uroczystości</li>
                    <li>wstępnie omówimy ofertę naszej agencji</li>
                    <li>odpowiem na Wasze pytania i postaram się rozwiać wszystkie wątpliwości</li>
                </ul>
            </div>
            <div className="work-pattern-page__step">
                <h2>KROK 2 : Przygotowanie oferty</h2>
                <ul>
                    <li>przedstawię ofertę, którą przygotowałam dla Was na podstawie ankiety i naszych rozmów</li>
                    <li>omówimy kosztorys ślubny oraz zakres prac, jakie dla Was wykonam.</li>
                </ul>
            </div>
            <div className="work-pattern-page__step">
                <h2>KROK 3 : Podpisanie umowy</h2>
                <ul className="step-list">
                    <li>podpiszemy umowę</li>
                    <li>przystąpimy do realizacji przygotowań do Waszego Dnia Ślubu</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default WorkPatternPage