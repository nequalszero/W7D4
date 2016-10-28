import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, requestAllPokemon, requestAPokemon, createPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';
import configureStore from './store/store';
import selectAllPokemon from './reducers/selectors';
import Root from './components/root';

window.createPokemon = createPokemon;
window.receiveAllPokemon = receiveAllPokemon;
window.requestAllPokemon = requestAllPokemon;
window.fetchAllPokemon = fetchAllPokemon;
window.selectAllPokemon = selectAllPokemon;
window.requestAPokemon = requestAPokemon;

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;

  const rootEl = document.getElementById('root');
  ReactDOM.render( <Root store={store}/>, rootEl);
});
