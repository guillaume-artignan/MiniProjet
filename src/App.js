import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './toggle';
import Calculatrice from './calculatrice/calculatrice';
import Pendu from './pendu/pendu'
import FlipCard from './flipcard/flipcard'

function App() {
  return (
    <div className="App">
       <FlipCard back="exclamation.png">
          <h1>Le Texte</h1>
          <p>Mon paragraphe</p>
       </FlipCard>

       <FlipCard back="question.png">
          <h1>Le Texte</h1>
          <p>Mon paragraphe</p>
       </FlipCard>

       <FlipCard back="exclamation.png">
          <h1>Le Texte</h1>
          <p>Mon paragraphe</p>
       </FlipCard>
      <Pendu mot="Salut"></Pendu>
      <div id="calWrapper">
     
      <Calculatrice></Calculatrice>
      </div>
      <h2>Question 1 </h2> <Toggle></Toggle>
      <h2>Question 2 </h2> <Toggle></Toggle>
      <h2>Question 3 </h2> <Toggle></Toggle>
      <h2>Question 4 </h2> <Toggle></Toggle>
    </div>
  );
}

export default App;
