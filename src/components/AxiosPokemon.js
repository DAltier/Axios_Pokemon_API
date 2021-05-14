import React, { useState } from 'react';
import axios from 'axios';
import { Button, Poke } from './Style.js';

const AxiosPokemon = () => {
  const [pokemonData, setPokemonData] = useState([]);

  const onClick = (e) => {
    axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807')
    .then(response => {
      setPokemonData(response.data.results);
    })
    .catch(error => console.log(error))
  };

  return (
    <div>
      <Button onClick = { onClick }>Fetch Pokemons</Button>
      {pokemonData.map((poke, i) => (
        <Poke key = { i }>{ poke.name }</Poke>
      ))}
    </div>
  );
}

export default AxiosPokemon;