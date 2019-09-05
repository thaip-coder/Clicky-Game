/* Importing React and App.css */
import React, { Component } from 'react';
import './App.css';
/* Components Imported */
import Title from './components/Title';
import Card from  './components/Card';
import Nav from './components/Nav';
import Wrapper from './components/Wrapper'
/* Importing characters */
import characters from './characters.json';

function shuffleCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  state = {
    characters,
    currentScore: 0,
    highScore: 0,
    rightWrong: "",
    clicked: [],
  };

clickEvent = id => {
  if (this.state.clicked.indexOf(id) === -1) {
      this.increment();
      this.setState({ clicked: this.state.clicked.concat(id)});
    } else {
      this.reset();
    }
};

reset = () => {
  this.setState({
    currentScore: 0,
    highScore: this.state.highScore,
    rightWrong: "Try Again??",
    clicked: []
  });
  this.shuffle();
};

shuffle = () => {
  let shuffledCards = shuffleCards(characters);
  this.setState({ cards: shuffledCards });
};

increment = () => {
  const newScore = this.state.currentScore + 1;
  this.setState({
    currentScore: newScore,
    rightWrong: ""
  });
  if (newScore >= this.state.highScore) {
    this.setState({ highScore: newScore });
  } else if (newScore === 12) {
    this.setState({ rightWrong: "Congratulations! You've Won!!"});
  }
  this.shuffle();
}

render() {
  return (
    <Wrapper>
      <Nav
        title="Windwaker Clicky Game"
        score={this.state.currentScore}
        highScore={this.state.highScore}
        rightWrong={this.state.rightWrong}
        />

        <Title>
          Click on each character, but not more than once!
        </Title>
        {this.state.characters.map(characters => (
          <Card
          key={characters.id}
          clickEvent={this.clickEvent}
          increment={this.increment}
          reset={this.reset}
          shuffle={this.shuffle}
          id={characters.id}
          image={characters.image}
          />
        ))}
    </Wrapper>
    );
  }
}
export default App;
