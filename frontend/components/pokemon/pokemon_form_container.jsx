import { connect } from 'react-redux';
import { createPokemon } from '../../actions/pokemon_actions';
import PokeFormComponent from './pokemon_form';

const mapDispatchToProps = (dispatch) => ({
  handleCreate: (pokeInfo) => dispatch(createPokemon(pokeInfo))
});

export default connect(
  mapDispatchToProps
)(PokeFormComponent);
