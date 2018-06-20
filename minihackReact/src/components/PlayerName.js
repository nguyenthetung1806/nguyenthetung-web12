import React, { Component } from 'react';

class PlayerName extends Component {
  render() {
    return (
        <th>{this.props.player}</th>
    );
  }
}

export default PlayerName;