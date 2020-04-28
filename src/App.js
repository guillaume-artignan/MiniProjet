import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './toggle';
import Calculatrice from './calculatrice/calculatrice';

function App() {
  return (
    <div className="App">
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
