import {useState, } from "react";
import axios from "axios"
import {useParams} from "react-router-dom"

const Update =()=>{
  const [newHeroName, setNewHeroName] = useState("");
  const [newHeroPower, setNewHeroPower] = useState("");
  const [newHeroLife, setNewHeroLife] = useState("");
  const [newTypeWeapon, setNewTypeWeapon] = useState("");
  const [message, setMessage] = useState("");
  
  const{id} = useParams();

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

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        axios
          .put(`http://localhost:8080/api/heros/${id}`, {
            name: `${newHeroName}`,
            power: `${newHeroPower}`,
            life: `${newHeroLife}`,
            id_type_weapon: `${newTypeWeapon}`,
          })
          .then((res) => {
            console.log(res.data);
            setMessage("Bravo ! Ce héros est mis à jour ! ")
             
          })
              .catch((error) => {
      console.log("Something went wrong", error)
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
            <input
              type="text"
              id="power"
              name="power"
              onChange={powerFunction}
            />
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
        </form>
        <h3>{message} </h3>
      </div>
    );
}
export default Update;