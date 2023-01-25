import React from "react";
import workpatternpic from "../../../images/jak-pracuje.jpg";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const MyWorkPattern = () => {
  const [element, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      ref={element}
      className={`work-pattern ${inView ? "animate" : ""}`}
    >
      <div className="work-pattern__pic-container">
        <img
          className="work-pattern__pic"
          src={workpatternpic}
          alt="Organizatorka ślubów w trakcie pracy przy komputerze."
        ></img>
      </div>
      <div className="flex-col work-pattern__text-container">
        <h2 className="work-pattern__heading migra bold">Jak pracuję?</h2>
        <p className="work-pattern__p">
          Szukacie organizatora ślubów działającego w Poznaniu i okolicach?
          Cieszę się, że trafiliście właśnie do mnie! Już od samego początku
          lubię określić plan działania i kroki, jakie podejmiemy podczas
          przygotowań do Waszego Dnia Ślubu. Wspólnie stworzymy cudowne
          wydarzenie, które Wy oraz Goście zapamiętacie na długie lata.
          Zapraszam na niezobowiązujące, bezpłatne spotkanie, na którym się
          poznamy i przedstawię Wam moją ofertę. Możemy spotkać się osobiście w
          Poznaniu lub online poprzez platformy multimedialne.
        </p>
        <Link to={"/jak-pracuje"}>
          <button>Dowiedz się więcej</button>
        </Link>
      </div>
    </section>
  );
};

export default MyWorkPattern;
