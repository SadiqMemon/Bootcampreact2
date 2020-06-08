import React from 'react';
import './App.css';
import Dinner from './dinner.js';

function App() {
  return (
    <div>
      <Dinner dishName="Chicken Briyani" Days="Sunday" sweetDish="Kheer" />
      <Dinner dishName="Chicken Karahi" Days="Monday" sweetDish="Lab e Shireen" />
      <Dinner dishName="Chicken Karahi" Days="Tuesday" sweetDish="Gajar ka Halwa" />
      <Dinner dishName="Chicken pulao" Days="Wednesday" sweetDish="Jalebi" />
      </div>
  )
    
}

export default App;
