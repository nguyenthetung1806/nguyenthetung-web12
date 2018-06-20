import React, { Component } from 'react';
import TableHead from './TableHead';
import Round from "./Round";

class GameField extends Component {
  render() {
    const roundItems = this.props.rounds.map((round, index) => <Round index={index} rounds={round} handleChange={this.handleChange} />)

    return (
      <div>
              <TableHead playerNames={this.props.playerNames} rounds={this.props.rounds}/>
              <tbody>
                {roundItems}  
              </tbody>
      </div>
    );
  }
}

export default GameField;