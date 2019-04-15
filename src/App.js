import React, { Component } from 'react';
import  GenerateQuote  from  './Components/GenerateQuote';
import  DisplayQuote  from  './Components/DisplayQuote';
import './App.css';

const  sampleQuote = {
  message: "Shoplifting is a victimless crime, like punching someone in the dark.",
  character: "Nelson Muntz",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  characterDirection : "Left"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      simpsonsQuote: sampleQuote
    };
  }

  getQuote() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(results => results.json())
      .then(data => {
        this.setState({
          simpsonsQuote: data[0],
        });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <GenerateQuote selectQuote={() => this.getQuote()}  />
          <DisplayQuote simpsonsQuote={this.state.simpsonsQuote}  />
        </header>
      </div>
    );
  }
}

export default App;