import React, { Component } from 'react';
import RoundResult from './RoundResult';

class Round extends Component {

  render() {
    var checkRule = this.props.roundResults.reduce((a,b) => Number(a) + Number(b), 0)
    console.log(checkRule)
    return (

      <tr>
        <th>Round {this.props.roundIndex + 1} {
            checkRule !== 0 ? <span className="warning" >Sum of a row must equal 0</span> : ""
          } 
        </th>
        {this.props.roundResults.map((value, index) => 
        <RoundResult roundIndex={this.props.roundIndex} playerId={index} handleChange={this.props.handleChange} value={value} />)}
      </tr>
    );
  }
}


export default Round;