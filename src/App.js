import Home from "./Pages/Home/Home";
import AboutMePage from "./Pages/AboutMePage/AboutMePage";
import OfferPage from "./Pages/OfferPage/OfferPage";
import Nav from "./Nav/Nav";
import "./GlobalStyles.scss";
//Router
import {Routes, Route} from "react-router-dom";



function App() {
  return (
    <div className="app-container">
      <Nav></Nav>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/o-mnie" element={<AboutMePage/>}/>
        <Route path="/oferta" element={<OfferPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
