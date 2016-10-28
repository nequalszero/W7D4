import { connect } from 'react-redux';
import ItemDetail from './item_detail';

const mapStateToProps = (state, ownProps) => {
  let itemId = ownProps.params.itemId;
  let itemDetail = state["pokemonDetail"]["items"][itemId];
  return {itemDetail};
};

export default connect(
  mapStateToProps
)(ItemDetail);
