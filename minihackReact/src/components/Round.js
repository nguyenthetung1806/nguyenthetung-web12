import React, { Component } from 'react';
import RoundResult from './RoundResult';

class Round extends Component {
  handleChange = (roundResultId, value) => {
    this.props.handleChange(this.props.index, roundResultId, value)
  }
  render() {
    const roundResults = this.props.rounds
      .map((value, index) => <RoundResult roundResultId={index} handleChange={this.handleChange} value={value} />)
    return (
      <tr>
        <th>Round {this.props.index} </th>
        {roundResults}
      </tr>
    );
  }
}


export default Round;