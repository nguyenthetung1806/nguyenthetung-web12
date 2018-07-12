import React, { Component } from 'react';
import AddRoundBtn from './AddRoundBtn.';
import Table from './Table';

class PagePlay extends Component {

  state = {
    rounds: [[0, 0, 0, 0]]
  }

  handleChange = (roundIndex, PLayerId, value) => {
    let rounds = [];
    for (let i = 0; i < this.state.rounds.length; i++) {
      rounds[i] = this.state.rounds[i].slice(0);
    }
    rounds[roundIndex][PLayerId] = value;
    this.setState({
      rounds: rounds
    })
  }

  handleAddRound = () => {
    var rounds = [];
    for (let i = 0; i < this.state.rounds.length; i++) {
      rounds[i] = this.state.rounds[i].slice(0);
    }
    rounds.push([0, 0, 0, 0])
    this.setState({
      rounds: rounds
    })
  }

  render() {
    return (
      <div>
        <Table handleChange={this.handleChange} playerNames={this.props.playerNames} rounds={this.state.rounds} />
        <AddRoundBtn handleAddRound={this.handleAddRound}  />
      </div>
    );
  }
}

export default PagePlay;