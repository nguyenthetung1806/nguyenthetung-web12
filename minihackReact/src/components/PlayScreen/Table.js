import React, { Component } from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

class Table extends Component {
  render() {
    return (
        <table className="table table-striped">
          <TableHead playerNames={this.props.playerNames} rounds={this.props.rounds} />
          <TableBody rounds={this.props.rounds} handleChange={this.props.handleChange} />
        </table>
    );
  }
}

export default Table;