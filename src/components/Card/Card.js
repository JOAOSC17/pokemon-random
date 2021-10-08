import React from 'react'
import './Card.css'
export default function Card({pokemon}) {
    return (
        <div className="card">
            <span className="card__glassphormism">{pokemon.name}</span>
            <div className="card__info">
                <img className="card__info-image" src={pokemon.sprites.other['official-artwork']?.front_default} alt={pokemon.name}/>
        <h1 className="card__info-title" >{pokemon.name}</h1>
        <div className="card__info-types">
        {pokemon.types.map((type, id)=>(
          <span key={id}>{type.type.name}</span>
        ))}
        </div>
        </div>
      </div>
    )
}
