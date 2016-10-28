export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const REQUEST_ALL_POKEMON = "REQUEST_ALL_POKEMON";
export const REQUEST_A_POKEMON = "REQUEST_A_POKEMON";
export const RECEIVE_A_POKEMON = "RECEIVE_A_POKEMON";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const RECEIVE_NEW_POKEMON = "RECEIVE_NEW_POKEMON";

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestAllPokemon = () => ({
  type: REQUEST_ALL_POKEMON
});

export const requestAPokemon = (id) => ({
  type: REQUEST_A_POKEMON,
  id
});

export const receiveAPokemon = (pokemonDetail) => ({
  type: RECEIVE_A_POKEMON,
  pokemonDetail
});

export const receiveNewPokemon = (pokemon) => ({
  type: RECEIVE_NEW_POKEMON,
  pokemon
});

export const createPokemon = pokeInfo => ({
  type: CREATE_POKEMON,
  pokeInfo
});
