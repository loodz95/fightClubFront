import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Creer from "./pages/Creer";
import Afficher from "./pages/Afficher";
import NavBar from "./components/NavBar";
import PageParId from "./pages/PageParId";
import Accueil from "./pages/Accueil";
import Update from "./pages/Update";
//import { BrowserRouter, Routes, Route } from "react-router-dom";

export interface Hero {
  id: number;
  name: string;
  power: number;
  life: number;
  id_type_weapon: number;
}

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/all" element={<Afficher />} />
          <Route path="/all/:id" element={<PageParId />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/post" element={<Creer />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>

      {/* <h1>Fight Club Project</h1>
    <div className="boutonAfficher">
      <button onClick={afficher}>Afficher les persos</button>
    </div>
    <BrowserRouter>
      <div className="flexButtons">
        <NavLink to="creer">
          <button>Créer Nouveau Perso</button>
        </NavLink>
        <NavLink to="modifier">
          <button>Modifier Nouveau Perso</button>
        </NavLink>
        <NavLink to="supprimer">
          <button>Supprimer Nouveau Perso</button>
        </NavLink>
        <button>Supprimer Nouveau Perso</button>
        <Routes>
          <Route path="/creer" element={<Creer />} />
          <Route path="/modifier" element={<Modifier />} />
          <Route path="/supprimer" element={<Supprimer />} />
        </Routes>
      </div>
    </BrowserRouter>
    <ul className="flex">
      {tabHero.map((hero: Hero) => (
        <li className="bordure">
          Name: {hero.name} <br />
          &#128170;{hero.power} <br />
          &#10084;&#65039;{hero.life}
        </li>
      ))}
    </ul> */}
    </div>
  );
};

export default App;
