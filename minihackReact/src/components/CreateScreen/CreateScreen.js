import React, { Component } from 'react';
import PlayerField from './PlayerField';
import CreateBtn from './CreateBtn';

class PageCreate extends Component {
    render() {
        return (
            <div>
                <PlayerField playerId={0} placeholder="Player 1" handleInput={this.props.handleInput}/>
                <PlayerField playerId={1} placeholder="Player 2" handleInput={this.props.handleInput}/>
                <PlayerField playerId={2} placeholder="Player 3" handleInput={this.props.handleInput}/>
                <PlayerField playerId={3} placeholder="Player 4" handleInput={this.props.handleInput}/>
                <CreateBtn handlePage={this.props.handlePage} />
            </div>
        );
    }
}

export default PageCreate;