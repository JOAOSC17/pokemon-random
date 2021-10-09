import React from 'react'
import './Card.css'
import not_found from '../../assets/not_found.png'
export default function Card({pokemon, loading}) {
    return (
        <div className="card">
        {loading &&( <div className="card__loading">Carregando...</div> )}
        {pokemon && !loading &&(
              <>
            <span className="card__glassphormism">{pokemon.name}</span>
            <div className="card__info">
                <img className="card__info-image" src={(pokemon.sprites.other['official-artwork']?.front_default)?(pokemon.sprites.other['official-artwork']?.front_default):(not_found)} alt={pokemon.name}/>
        <h1 className="card__info-title" >{pokemon.name}</h1>
        <div className="card__info-types">
        {pokemon.types.map((type, id)=>(
          <span key={id}>{type.type.name}</span>
        ))}
        </div>
        </div>
        </>
          ) }
      </div>
    )
}
