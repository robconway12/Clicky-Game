import React, { Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Container from "./components/Container"

class App extends Component {
  state = {
    count: 0,
    topScore: 0
  }

  // update the current score
  updateCurrentScore = (newCount) => {
    this.setState({count: newCount});
  }

  // update the top score
  updateTopScore = (newTop) => {
    if (newTop > this.state.topScore) {
      // set the state and subtract 1
      this.setState({topScore: newTop - 1})
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <Navbar score={this.state.count} top={this.state.topScore}/>
        <Container updateCurrentScore={this.updateCurrentScore} updateTopScore={this.updateTopScore}/>
      </div>
    );
  }
}

export default App;