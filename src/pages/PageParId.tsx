import axios, { AxiosResponse } from "axios";
import { Hero } from "./Afficher";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../index.css";

const PageParId = () => {
  const [allHeroes, setAllHeroes] = useState<Hero>();
  const {id}  = useParams();

  useEffect(() => {
    axios

      .get(`http://localhost:8080/api/heros/${id}`)
      .then((response: AxiosResponse<{ data: Hero[] }>) => {
        let myHeroes = response.data.data[0];
        console.log("tout le tableau",response)
          console.log("tableauheros", myHeroes);
        setAllHeroes(myHeroes);
      });
  },[id] );

console.log("les datas",allHeroes)
  return (
    <div>
      <p className = "choice">Tu as choisi :</p>
      <li className="bordure">
        {allHeroes?.name}
      </li>
    </div>
  );
};

export default PageParId;
