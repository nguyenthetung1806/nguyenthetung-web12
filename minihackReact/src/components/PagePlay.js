import React, { Component } from 'react';
import GameField from './GameField';
import AddRoundBtn from './AddRoundBtn.';

class PagePlay extends Component {

  state = {
    rounds: [[1, 2, 3, 4],
    [2, 3, 3, 2]
    ]
  }

  handleChange = (index, roundResultId, value) => {
    let newRounds = [];
    for (let i = 0; i < this.state.rounds.length; i++) {
      newRounds[i] = this.state.rounds[i].slice(0);
    }
    newRounds[index][roundResultId] = value;
    this.setState({
      rounds: newRounds
    })

  }

  handleAddRound = () => {
    let newRounds = [];
    for (let i = 0; i < this.state.rounds.length; i++) {
      newRounds[i] = this.state.rounds[i].slice(0);
    }
    newRounds.push([0, 0, 0, 0])
    this.setState({
      rounds: newRounds
    })
  }

  render() {
    return (
      <div>
        <div className="table-responsive">

          <table className="table table-striped">
            <GameField handleChange={this.handleChange} playerNames={this.props.playerNames} rounds={this.state.rounds} />

          </table>
        </div>
        <AddRoundBtn handleClick={this.handleAddRound} />
      </div>
    );
  }
}

export default PagePlay;