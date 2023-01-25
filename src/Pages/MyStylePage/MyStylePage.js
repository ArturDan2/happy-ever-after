import React, { useEffect, useState } from "react";
import "./Styles/MyStyleStyles.scss";
import { pins } from "./pins";
//helmet
import HelmetComponent from "../../SEO/HelmetComponent";
import ogpic from "../../SEO/og-picture.png";

const MyStylePage = () => {
  // eslint-disable-next-line no-unused-vars
  const [animPage, setAnimatePage] = useState();

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.type = "text/javascript";
    script.dataset.pinBuild = "doBuild";
    script.src = "//assets.pinterest.com/js/pinit.js";
    document.body.appendChild(script);
    if (window.doBuild) window.doBuild();
    setAnimatePage(true);
  }, []);

  return (
    <div className={`my-style-page slide-in sub-page`}>
      <HelmetComponent
        title="Mój styl - Organizacja ślubów i wesel w Poznaniu | Happy Ever After"
        description="Sprawdź porcję zdjęć, która pozwoli Ci zrozumieć w jakiej stylistyce czuję się najlepiej oeganizując wesela i śluby."
        type="webstie"
        img={ogpic}
      />
      <div className="my-style-page__header-container">
        <h1>Mój styl</h1>
        <p>
          Organizacja Ślubu i Wesela jest wyjątkowym i ekscytującym czasem, może
          jednak bywać stresująca. Dlatego w swojej pracy stawiam na swobodę i
          miłą atmosferę. Zależy mi, żeby Wasze wspomnienia z przygotowań były
          przyjemne i niezapomniane. Jestem otwarta na wszystkie Wasze pomysły,
          a przez tę porcję zdjęć chciałabym pokazać wam w jakiej stylistyce
          czuję się najlepiej. Razem sprawimy, aby ten dzień wyglądał dokładnie
          tak jak sobie wymarzyliście!
        </p>
      </div>
      <div className="my-style-page__pins">
        {pins.map((pin) => {
          // eslint-disable-next-line jsx-a11y/anchor-has-content
          return (
            <div key={pin} className="my-style-page__instax">
              <a
                className="my-style-page__pin"
                data-pin-width="medium"
                data-pin-do="embedPin"
                data-pin-lang="pl"
                data-pin-terse="true"
                href={pin}
              ></a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyStylePage;
