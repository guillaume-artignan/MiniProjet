import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './toggle';
import Calculatrice from './calculatrice/calculatrice';
import Carte from './carte/carte';


class App extends Component {

  constructor(){
    super();
    this.tab = [];
  }

  ajouterCarte(numero){

    this.tab.push(numero);
    this.setState({});
  }

  render(){
    return (
      <div className="App">
        <div id="calWrapper">
        <Calculatrice></Calculatrice>
        </div>
        <h2>Question 1 </h2> <Toggle></Toggle>
        <h2>Question 2 </h2> <Toggle></Toggle>
        <h2>Question 3 </h2> <Toggle></Toggle>
        <h2>Question 4 </h2> <Toggle></Toggle>
        <div className="liste-carte">
          {
            this.tab.map((item)=> <Carte nombre={item}></Carte> )
          }
          <Carte ajoutDemande={this.ajouterCarte.bind(this)} ></Carte>
        </div>
      </div>
    )
  }
}

export default App;
