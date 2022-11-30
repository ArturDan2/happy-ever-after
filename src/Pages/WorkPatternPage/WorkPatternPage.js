import React from 'react';
import './Styles/WorkPatternStyles.scss';

const WorkPatternPage = () => {
  return (
    <div className='main-container slide-in sub-page'>
        <div className='heading'>
            <h2>Jak pracuję?</h2>
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
        <div className="steps">
            <div className="step">
                <h3>KROK 1 : Spotkanie</h3>
                <ul>
                    <li>Poproszę was o wspólne wypełnienie ankiety Pary Młodej, która pomoże mi określić wasze oczekiwania</li>
                    <li>porozmawiamy o Waszych inspiracjach</li>
                    <li>wspólnie omówimy styl, charakter i koncepcję Waszej uroczystości</li>
                    <li>wstępnie omówimy ofertę naszej agencji</li>
                    <li>odpowiem na Wasze pytania i postaram się rozwiać wszystkie wątpliwości</li>
                </ul>
            </div>
            <div className="step">
                <h3>KROK 2 : Przygotowanie oferty</h3>
                <ul>
                    <li>przedstawię ofertę, którą przygotowałam dla Was na podstawie ankiety i naszych rozmów</li>
                    <li>omówimy kosztorys ślubny oraz zakres prac, jakie dla Was wykonam.</li>
                </ul>
            </div>
            <div className="step">
                <h3>KROK 3 : Podpisanie umowy</h3>
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