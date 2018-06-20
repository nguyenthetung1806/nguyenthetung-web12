import React, { Component } from 'react';

class CreateBtn extends Component {
  render() {
    return (
      <div className="text-center">
        <button className="btn" onClick={this.props.handlePage}>Create new game</button>
      </div>
    
    );
  }
}

export default CreateBtn;