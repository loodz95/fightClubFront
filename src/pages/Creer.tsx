import axios, { AxiosResponse } from "axios";
import React, { useState, useEffect } from "react";
import { LanguageServiceMode } from "typescript";
import { Hero } from "./Afficher";

const Creer = () => {
  const [listHero, setListHero] = useState<Hero[]>([]);
  const [newHeroName, setNewHeroName] = useState("");
  const [newHeroPower, setNewHeroPower] = useState("");
  const [newHeroLife, setNewHeroLife] = useState("");
  const [newTypeWeapon, setNewTypeWeapon] = useState("");
  const [message, setMessage] = useState("");

  const nameFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewHeroName(e.currentTarget.value);
    
  };
  const powerFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewHeroPower(e.currentTarget.value);
    
  };
  const lifeFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewHeroLife(e.currentTarget.value);
  };
  const weaponFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTypeWeapon(e.currentTarget.value);
  };

  const handleSubmit =(e: React.FormEvent<HTMLFormElement>)=>{
   e.preventDefault()
axios
  .post("http://localhost:8080/api/heros/", {
    name: `${newHeroName}`,
    power: `${newHeroPower}`,
    life: `${newHeroLife}`,
    id_type_weapon: `${newTypeWeapon}`

  })
  .then((res) => {
    console.log(res.data);
    setMessage("Tu as crée un nouveau perso !");
  })
 .catch ((error)=>{
  console.error("something went wrong", error)
  setMessage("Oups !! Tu as oublié de remplir un des champs");
 })  
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nom :</label>
          <input type="text" id="name" name="name" onChange={nameFunction} />
        </div>
        <div>
          <label htmlFor="power">Power:</label>
          <input type="text" id="power" name="power" onChange={powerFunction} />
        </div>
        <div>
          <label htmlFor="life">Life :</label>
          <input type="text" id="life" name="life" onChange={lifeFunction} />
          <div>
            <label htmlFor="life">Type Weapon</label>
            <input
              type="text"
              id="life"
              name="life"
              onChange={weaponFunction}
            />
          </div>
        </div>
        <input type="submit" />
        <h2>{message}</h2>
      </form>
    </div>
  );
};
export default Creer;
