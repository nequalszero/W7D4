import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

const PokemonIndex = ({children, pokemon}) => {
  return (
    <div className="pokedex">
      <ul className="pokemonList">
        {pokemon.map( (pk, idx) => (<PokemonIndexItem key={pk.id} pokemon={pk}/>))}
      </ul>
      {children}
    </div>
  );
};

export default PokemonIndex;
