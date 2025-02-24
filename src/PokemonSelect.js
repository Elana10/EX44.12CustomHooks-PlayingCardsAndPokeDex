import React, { useState } from "react";
import pokemonList from "./pokemonList";
import { choice } from "./helpers";
import {v1 as uuid} from "uuid";

/* Select element to choose from common pokemon. */
function PokemonSelect({ add, pokemon = pokemonList }) {
  const [pokeIdx, setPokeIdx] = useState(0);
  const handleChange = evt => {
    setPokeIdx(evt.target.value);
  };

  function formatPokemon(data) {
    if (data.sprites && data.sprites.front_default) {

      let newPoke = {
        id: uuid(),
        front: data.sprites.front_default,
        back: data.sprites.back_default,
        name: data.name,
        stats: data.stats.map(stat => ({
          value: stat.base_stat,
          name: stat.stat.name
        }))
      }
   
      return newPoke;
    } else {
      console.error("Sprites or front_default is undefined");
      return null;
    }
  }
  

  function choice(values) {
    const randIdx = Math.floor(Math.random() * values.length);
    return values[randIdx];
  }


  return (
    <div>
      <select onChange={handleChange}>
        {pokemon.map((p, idx) => (
          <option key={idx} value={idx}>
            {p}
          </option>
        ))}
      </select>
      <button onClick={() => add(formatPokemon, pokemon[pokeIdx])}>Catch one!</button>
      <button onClick={() => add(formatPokemon, choice(pokemon))}>I'm feeling lucky</button>
    </div>
  );
}

export default PokemonSelect; 
