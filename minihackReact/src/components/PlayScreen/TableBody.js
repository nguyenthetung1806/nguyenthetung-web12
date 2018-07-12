import React, { Component } from 'react';
import Round from "./Round";

class TableBody extends Component {
  render() {
    return (
        <tbody>

             {this.props.rounds.map((round, index) => 
             <Round roundIndex={index} roundResults={round} handleChange={this.props.handleChange} />) }
        </tbody>
    );
  }
}

export default TableBody;