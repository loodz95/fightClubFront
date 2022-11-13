import React, { useState, useEffect,} from "react";
import axios, { AxiosResponse } from "axios";
import {useParams} from "react-router-dom"

import { Link } from "react-router-dom";
import "./Afficher.css";

export interface Hero {
  id: number;
  name: string;
  power: number;
  life: number;
  id_type_weapon: number;
} 


const Afficher = () => {
      let [listHero, setListHero] = useState<Hero[]>([]);
      const[message, setMessage] = useState("")
     const {id} = useParams()
    

 useEffect(() => {
          axios
          
            .get("http://localhost:8080/api/heros/")
            .then((response: AxiosResponse<{ data: Hero[] }>) => {
              console.log("mesdatas", response.data.data);
              const myHeroes = response.data.data;
              setListHero(myHeroes);
            });
        }, []);


 

  const deleteFunction = (e: any, id: number) => {
    console.log(id);
    
    axios.delete(`http://localhost:8080/api/heros/${id}`).then((res) => {
      console.log(res.data.data);
      setMessage("Tu as dit aurevoir à ce héros");
    })
    .catch((error)=>{
 setMessage("Impossible d'effacer ce héros")
    })
    
  };
  

  return (
    <div>
      <ul className="flex">
        {listHero.map((hero: Hero, index) => (
          <li className="bordure" key={index}>
            <h2>{hero.name} </h2> <br /> &#128170;{hero.power} <br />
            &#10084;&#65039;{hero.life} <br />
            <button>
              <Link className="linkStyle" to={`/all/${hero.id}`}>
                Choisir ce perso
              </Link>
            </button>
            <button onClick={(e) => deleteFunction(e, hero.id)}>
              Supprime ce héros
            </button>
            <button>
              <Link className="linkStyle" to={`/update/${hero.id}`}>
                Modifie ce héros
              </Link>
            </button>
          </li>
        ))}
      </ul>
      <h2>{message}</h2>
    </div>
  );
};
export default Afficher;
