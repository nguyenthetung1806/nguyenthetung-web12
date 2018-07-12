import React, { Component } from 'react';
import TableHeadSum from './TableHeadSum';
import TableHeadName from './TableHeadName';

class TableHead extends Component {
  render() {
    return (
        <thead>
            <TableHeadName playerNames={this.props.playerNames} />
            <TableHeadSum rounds={this.props.rounds}/>
        </thead>
    );
  }
}

export default TableHead;
