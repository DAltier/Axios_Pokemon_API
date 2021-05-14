import React from 'react';
import './App.css';
import AxiosPokemon from './components/AxiosPokemon';

function App() {
  return (
    <div className="App">
      <h1>Click the button for a list of all Pokemons</h1>
      <AxiosPokemon />
    </div>
  );
}

export default App;