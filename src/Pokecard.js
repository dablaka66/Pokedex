
import Pokedex from "./Pokedex";
import "./Pokecard.css";


function Pokedcard () {
    const cards = [
      {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
      {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
      {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
      {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
      {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
      {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
      {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
      {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
    ]; ;
    let imagenId = "Pokeimg imagen-";
    let path = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    /* {cards.map((n,idx) => (
    imagenId.concat(n.id),
    path = path + n.id + ".png"; */
    return  <div className="allCards">
      {cards.map((n,idx) => (
        <div key={idx} className="card" id={n.id} >
            <p className="name">{n.name}</p>
            <img className = {imagenId + n.id}
                src={`${path}/${n.id}.png`}
                alt = {n.name} />
            <p className="type">Type: {n.type}  </p>
            <p className="exp">EXP: {n.base_experience}  </p>
          </div>
      ))}
   
    </div>
    
    
}



export default Pokedcard;