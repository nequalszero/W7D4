import { values } from 'lodash';

const selectAllPokemon = state => ( _.values(state.pokemon));

export default selectAllPokemon;
