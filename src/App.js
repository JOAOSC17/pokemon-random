import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css'
import logo from './assets/logo.png'
import Card from './components/Card/Card';
function App() {
  const [pokemon, setPokemon] =useState(null);
  useEffect(()=>{
    const randomId = Math.round(Math.random() * 890);
    const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
    axios.get(url).then(res=>{
      console.log(res.data)
      setPokemon(res.data)
    })
  },[])
  if(!pokemon)return<div>Carregando...</div>
  return (
    <div className="App">
      <div className="app__container">
      <img src={logo} alt="logo" draggable="false"/>
      <button type="submit">Click Para Sortear um Pokemon</button>
      <Card pokemon={pokemon}/>
    </div>
      </div>
  );
}

export default App;
