import React from 'react';

class PokeFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      attack: props.attack,
      defense: props.defense,
      poke_type: props.poketype,
      image_url: props.image_url,
      moves: props.moves
    };
    this.update = this.update.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  render() {
    return (
      <div>
        <label>Name<input type="text" onChange={this.update}></input></label>
      </div>
    );
  }
}

export default PokeFormComponent;
