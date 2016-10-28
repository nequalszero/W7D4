import React from 'react';
import { withRouter } from 'react-router';

const PokemonItem = (props) => {
  const handleClick = url => e => props.router.push(url);

  return (
    <li
      className="pokemon-item"
      key={props.item.id}
      onClick={handleClick(`pokemon/${props.item.pokemon_id}/item/${props.index}`)}>
      <img src={props.item.image_url} />
    </li>
  );
};

export default withRouter(PokemonItem);
