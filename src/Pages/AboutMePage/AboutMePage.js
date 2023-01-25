import React from "react";
import me from "../../images/o-mnie.jpg";
//styles
import "./Styles/AboutMeStyles.scss";
//helmet
import HelmetComponent from "../../SEO/HelmetComponent";
import ogpic from "../../SEO/og-picture.png";

const AboutMePage = () => {
  return (
    <div className="about-me-page slide-in sub-page">
      <HelmetComponent
        title="Kim jestem? -  Organizacja ślubów w Poznaniu | Happy Ever After"
        description="Jestem certyfikowaną organizatorką ślubów i wesel pracującą na terenie Poznania i okolic.
            Organizacja wydarzeń jest moją pasją, a towarzyszenie Wam na drodze do upragnionego Happy Ever After będzie moim zaszczytem."
        type="webstie"
        img={ogpic}
      />
      <div className="about-me-page__header-container">
        <h1 className="about-me-page__heading">Kim jestem?</h1>
        <div className="about-me-page__pic-container">
          <img
            src={me}
            alt="Portret organizatorki ślubów - właścicielki firmy Happy Ever After."
          ></img>
        </div>
      </div>
      <div className="about-me-page__text">
        <p>
          Przede wszystkim, jestem organizatorką ślubów pracującą na terenie
          Poznania i okolic. Myśl o zastaniu Wedding Plannerką zrodziła się w
          mojej głowie już w liceum, kiedy to towarzyszyłam siostrze w
          organizacji jej wesela. Później przygotowywanie tego typu wydarzeń
          przerodziło się w pasję i pomysł na przyszły zawód. Dzisiaj już jako
          certyfikowana organizatorka ślubów i wesel mogę powiedzieć, że z
          nieśmiałego kiedyś marzenia nastolatki zrodziło się coś naprawdę
          poważnego i pięknego.
        </p>
        <p>
          Połączenie mojej romantycznej duszy ze skłonnością do perfekcyjnego
          planowania wszystkiego z najdrobniejszymi szczegółami sprawia, że mogę
          z dumą powiedzieć, iż jestem dobra w tym, co robię. Otaczanie się
          Waszą miłością i szczęściem daje mi wielką radość oraz motywację do
          pracy i nieustannego rozwoju w obszarze organizacji wesel i ślubów.
          Mogę więc śmiało powiedzieć, że towarzyszenie Wam na drodze do
          upragnionego Happy Ever After będzie dla mnie ogromnym zaszczytem.
        </p>
        <p>
          Uwielbiam poznawać nowych ludzi i ich losy. Przyjemnością będzie dla
          mnie wpisanie się na kartę Waszej weselnej historii. I choć prywatnie
          za idealny uważam wieczór spędzony w kuchni, przy dobrej muzyce,
          książce i zapachu ciasta wydobywającego się z piekarnika, to jednak
          dla Was oderwę się od mojej bezpiecznej przystani i chętnie pomogę
          spełnić marzenie o idealnym ślubie i weselu.
        </p>
      </div>
    </div>
  );
};

export default AboutMePage;
