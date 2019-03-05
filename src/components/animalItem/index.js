import React, { Component } from 'react';
import './index.css';

class AnimalItem extends Component {
  render() {
    // this is javascript
    console.log(this.props.animals);
    return (
      // this is javascript
      <tr>
        <td>{this.props.animal.name}</td>
        <td>{this.props.animal.species}</td>
      </tr>
    );
  }
}

export default AnimalItem;
