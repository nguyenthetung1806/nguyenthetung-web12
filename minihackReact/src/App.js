import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import Header from './components/Header';
import PlayScreen from './components/PlayScreen/PlayScreen';
import CreateScreen from './components/CreateScreen/CreateScreen';

class App extends Component {
  state = {
    Page: 'CreateScreen',
    playerNames: ['', '', '', '']
  }

  handlePage = () => {
    this.setState({
      Page: "PLayScreen"
    });
  }

  handleInput = (id, playerName) => {
    var playerNames = [...this.state.playerNames];
    playerNames[id] = playerName;
    this.setState({
      playerNames : playerNames
    });
  }

  render() {
    return (
      <div className="App container">
        <Header />
        {this.state.Page === "CreateScreen" ? 
          <CreateScreen handlePage={this.handlePage} handleInput={this.handleInput}/>
          : <PlayScreen playerNames={this.state.playerNames} />}
      </div>
    );
  }
}

export default App;
