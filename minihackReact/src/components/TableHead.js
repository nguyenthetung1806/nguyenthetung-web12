import React, { Component } from 'react';
import PlayerName from './PlayerName';
import TableHeadSum from './TableHeadSum'
class TableHead extends Component {
  render() {
    const playerNames = this.props.playerNames.map(player => <PlayerName player={player} />)
    return (
        
        <thead>
            <tr>
                <th>#</th>
                {playerNames}
            </tr>
            <TableHeadSum rounds={this.props.rounds}/>
        </thead>
    );
  }
}

export default TableHead;
