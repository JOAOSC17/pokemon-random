import axios from 'axios';
import React, { useState } from 'react';
import './App.css'
import logo from './assets/logo.png'
import Card from './components/Card/Card';
function App() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isFetch, setIsFetch] = useState(false);
  async function getPokemon(){
    setLoading(true);
    const randomId = Math.round(Math.random() * 890);
    const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
    const response = await axios.get(url);
    const data = response.data;
    setIsFetch(true);
    setLoading(false);
    setPokemon(data);
  }
  return (
    <div className="App">
      <div className="app__container">
      <img className="app__container-logo" src={logo} alt="logo" draggable="false"/>
      <button className="app__container-btn" type="submit" onClick={getPokemon} disabled={loading}>Sorteie um Pokemon</button>
      {isFetch &&(<Card pokemon={pokemon} loading={loading}/>)}
    </div>
      </div>
  );
}

export default App;
