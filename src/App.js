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

//Function to shuffle the cards
function shuffleCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    //Assigns J variable a random value
    let j = Math.floor(Math.random() * (i + 1));
    //Swaps value of J and I indexes of the array to shuffle the cards
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

//Sets the state of the App
class App extends Component {
  state = {
    characters,
    currentScore: 0,
    highScore: 0,
    rightWrong: "",
    clicked: [],
  };

//Determines if what you clicked has been clicked already and increments score or resets the game
clickEvent = id => {
  if (this.state.clicked.indexOf(id) === -1) {
      this.increment();
      this.setState({ clicked: this.state.clicked.concat(id)});
    } else {
      this.reset();
    }
};

//Resets the game and shuffles the cards
reset = () => {
  //Resets the state of the game and updates the highScore
  this.setState({
    currentScore: 0,
    highScore: this.state.highScore,
    rightWrong: "Try Again??",
    clicked: []
  });
  this.shuffle();
};

//Established the state of the shuffled character cards
shuffle = () => {
  let shuffledCards = shuffleCards(characters);
  this.setState({ cards: shuffledCards });
};

//Function updates the newScore by incrementing the currentScore
increment = () => {
  const newScore = this.state.currentScore + 1;
  this.setState({
    currentScore: newScore,
    rightWrong: ""
  });
  //If the newScore is higher than the highScore, replace highScore with newScore
  if (newScore >= this.state.highScore) {
    this.setState({ highScore: newScore });
  //If newScore is 12, then you've won the game
  } else if (newScore === 12) {
    this.setState({ rightWrong: "Congratulations! You've Won!!"});
  }
  this.shuffle();
};

//Renders the page with all elements
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
