import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import { requestAPokemon, requestAllPokemon } from '../actions/pokemon_actions';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';
import ItemDetailContainer from './pokemon/item_detail_container';
import PokemonFormContainer from './pokemon/pokemon_form_container';

window.PokemonFormContainer = PokemonFormContainer;

const Root = ({ store }) => {
  const requestOnEnter = () => {
    store.dispatch(requestAllPokemon());
  };
  const requestOnSingle = (nextState) => {
    if (nextState) {
      let id = nextState.params.pokemonId;
      store.dispatch(requestAPokemon(id));
    } else {
      return;
    }
  };
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={PokemonIndexContainer} onEnter={requestOnEnter}>
          <IndexRoute component={PokemonFormContainer} />
          <Route path="pokemon/:pokemonId" component={PokemonDetailContainer} onEnter={requestOnSingle} >
            <Route path="item/:itemId" component={ItemDetailContainer} />
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
