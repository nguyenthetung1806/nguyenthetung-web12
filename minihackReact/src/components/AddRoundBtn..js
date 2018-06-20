import React, { Component } from 'react';

class AddRoundBtn extends Component {
  render() {
    return (
        <div>
            <button className="btn" onClick={this.props.handleClick}>Add round </button>
        </div>
    );
  }
}

export default AddRoundBtn; 