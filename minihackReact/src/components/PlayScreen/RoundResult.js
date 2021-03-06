import React, { Component } from 'react';

class RoundResult extends Component {
    handleChange = event => {
        this.props.handleChange(this.props.roundIndex, this.props.playerId, event.target.value)
    }
  render() {
    return (
        <th><input onChange={this.handleChange} type="number" value={this.props.value}/></th>
    );
  }
}

export default RoundResult;