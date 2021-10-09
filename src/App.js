import axios from 'axios';
import React, { useMemo, useState } from 'react';
import './App.css'
import logo from './assets/logo.png'
import Card from './components/Card/Card';
import { getColor } from './components/services/getColors';
function App() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isFetch, setIsFetch] = useState(false);
  const background = useMemo(() => {
    if (pokemon) {
      const { types } = pokemon;
      const color = getColor(types);

      if (types.length > 1) {
        return { background: `linear-gradient(45deg, ${color[0]}, ${color[1]})` };
      } else {
        return { backgroundColor: color };
      }
    }
  }, [pokemon]);
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
    <div className="App" style={background}>
      <div className="app__container">
      <img className={`app__container-logo ${isFetch &&('active')}`} src={logo} alt="logo" draggable="false"/>
      <button className={`app__container-btn ${isFetch &&('active')}`} type="submit" onClick={getPokemon} disabled={loading}>Sorteie um Pokemon</button>
      {isFetch &&(<Card pokemon={pokemon} loading={loading} background={background}/>)}
    </div>
      </div>
  );
}

export default App;
