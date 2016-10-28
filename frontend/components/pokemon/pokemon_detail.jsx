import React from 'react';
import PokemonItem from './pokemon_item';

const PokemonDetail = ({pokemonDetail, children}) => {
  if (pokemonDetail.name ) {
    console.log("Hello from PokemonDetail", pokemonDetail);
    return (
      <div>
        <ul className="pokemon-detail">
          <img src={pokemonDetail.image_url}></img>
          <h2>{pokemonDetail.name}</h2>
          <li>{pokemonDetail.poke_type}</li>
          <li>{pokemonDetail.attack}</li>
          <li>{pokemonDetail.defense}</li>
          <li>{pokemonDetail.moves.join(', ')}</li>
          {pokemonDetail.items.map( (item, idx) => (<PokemonItem item={item} key={item+idx} index={idx}/>))}
        </ul>
        {children}
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default PokemonDetail;
