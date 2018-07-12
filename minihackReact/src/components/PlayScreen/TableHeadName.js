import React, { Component } from 'react';

class TableHeadName extends Component {
    render() {
        return (
            <tr>
                <th>#</th>
                {this.props.playerNames.map(player => <th>{player}</th>)}
            </tr>
        );
    }
}

export default TableHeadName;