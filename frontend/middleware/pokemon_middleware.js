import { fetchAllPokemon, fetchAPokemon, createPokemon } from '../util/api_util';
import { REQUEST_ALL_POKEMON, receiveAllPokemon, REQUEST_A_POKEMON, receiveAPokemon, CREATE_POKEMON, receiveNewPokemon } from '../actions/pokemon_actions';

const PokemonMiddleware = ({ dispatch }) => next => action => {
  console.log(action);
  switch(action.type) {
    case REQUEST_ALL_POKEMON:
      const fetchAllSuccess = pokemon => dispatch(receiveAllPokemon(pokemon));
      fetchAllPokemon(fetchAllSuccess);
      return next(action);
    case REQUEST_A_POKEMON:
      const fetchASuccess = pokemonDetail => dispatch(receiveAPokemon(pokemonDetail));
      const fetchAError = e => alert(e);
      fetchAPokemon(fetchASuccess, fetchAError, action.id);
      return next(action);
    case CREATE_POKEMON:
      const createPokeSuccess = winstonPersonalInfo => dispatch(receiveNewPokemon(winstonPersonalInfo));
      const createPokeError = e => alert(e);
      createPokemon(createPokeSuccess, createPokeError, action.pokeInfo);
      return next(action);
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
