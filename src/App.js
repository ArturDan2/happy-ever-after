import { useState, useEffect} from "react";
import Home from "./Pages/Home/Home";
import AboutMePage from "./Pages/AboutMePage/AboutMePage";
import OfferPage from "./Pages/OfferPage/OfferPage";
import MyStylePage from "./Pages/MyStylePage/MyStylePage";
import WorkPatternPage from "./Pages/WorkPatternPage/WorkPatternPage";
import Nav from "./Nav/Nav";
import "./GlobalStyles.scss";
//Router
import {Routes, Route, useLocation} from "react-router-dom";



function App() {

  const {pathname} = useLocation();

  useEffect(()=> {
    if(pathname !== "/kontakt"){
      window.scrollTo(0, 0);
    }
  }, [pathname])

  return (
    <div className="app-container">
      <Nav></Nav>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/o-mnie" element={<AboutMePage/>}/>
        <Route path="/oferta" element={<OfferPage/>}/>
        <Route path="/moj-styl" element={<MyStylePage/>}/>
        <Route path="/jak-pracuje" element={<WorkPatternPage/>}/>
        <Route path="/kontakt" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
