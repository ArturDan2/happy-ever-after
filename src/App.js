import { useState } from "react";
import Home from "./Pages/Home/Home";
import AboutMePage from "./Pages/AboutMePage/AboutMePage";
import OfferPage from "./Pages/OfferPage/OfferPage";
import WorkPatternPage from "./Pages/WorkPatternPage/WorkPatternPage";
import Nav from "./Nav/Nav";
import "./GlobalStyles.scss";
//Router
import {Routes, Route} from "react-router-dom";



function App() {
  
  const [navVisible, setNavVisible] = useState(false);
  
  return (
    <div className="app-container">
      <Nav navVisible={navVisible}></Nav>
      <Routes>
        <Route path="" element={<Home navVisible={navVisible} setNavVisible={setNavVisible}/>}/>
        <Route path="/o-mnie" element={<AboutMePage/>}/>
        <Route path="/oferta" element={<OfferPage/>}/>
        <Route path="/jak-pracuje" element={<WorkPatternPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
