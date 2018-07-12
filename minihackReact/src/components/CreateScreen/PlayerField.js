import React, { Component } from 'react';

class PlayerField extends Component {
    handleInput = (event) => {
        this.props.handleInput(this.props.playerId, event.target.value);
    }
    render() {
        return (
            <div className="form-group">
                <input className="form-control" placeholder={this.props.placeholder} onChange={this.handleInput}/>
            </div>

        );
    }
}

export default PlayerField;