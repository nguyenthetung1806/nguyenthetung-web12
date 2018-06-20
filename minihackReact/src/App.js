import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import Header from './components/Header';
import PagePlay from './components/PagePlay';
import PageCreate from './components/PageCreate';

class App extends Component {
  state = {
    pageOne: true,
    playerNames: ['', '', '', '']
  }

  handlePage = () => {
    this.setState({
      pageOne: false
    })
  }

  handleInput = (id, player) => {
    var newPlayernames = [...this.state.playerNames]
    newPlayernames[id] = player;
    this.setState({
      playerNames: newPlayernames
    })
  }

  render() {
    return (
      <div className="App container">
        <Header />
        {this.state.pageOne ? <PageCreate handlePage={this.handlePage} handleInput={this.handleInput}/>
                            : <PagePlay playerNames={this.state.playerNames} />}
      </div>
    );
  }
}

export default App;
