import React, { useState } from "react";
import {v1 as uuid} from "uuid";
import axios from "axios";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";
import useAxios from "./hooks/useAxios";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const url = 'https://pokeapi.co/api/v2/pokemon/'
  const [pokemon, setPokemon] = useAxios(url, 'pokemon')
  
  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={setPokemon} />
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(cardData => (
          <PokemonCard
            key={cardData.id}
            front={cardData.front}
            back={cardData.back}
            name={cardData.name}
            stats={cardData.stats.map(stat => ({
              value: stat.value,
              name: stat.name
            }))}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
 