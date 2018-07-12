import React, { Component } from 'react';

class AddRoundBtn extends Component {
  render() {
    return (
        <div className="text-center" >
            <button className="btn" onClick={this.props.handleAddRound}>ADD ROUND</button>
        </div>
    );
  }
}

export default AddRoundBtn; 