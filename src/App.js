import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dinner from './dinner.js';

function App() {
  return (
    <div>
      <Dinner dishName="Chicken Briyani" Days="Sunday" sweetDish="Kheer" />
      <Dinner dishName="Chicken Karahi" Days="Monday" sweetDish="Lab e Shireen" />
      </div>
  )
    
}

export default App;
