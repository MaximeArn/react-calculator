import React from 'react';
import Button from '../Button/Button'
import './styles.scss';

const App = () => {

  let buttons = ['C',',','+','-','÷','*','=',9,8,7,6,5,4,3,2,1,0]

  return(
  <div className="app">
    <p className="screen">0=10/5</p>
    <div className="buttons-wrapper">
      {buttons.map((value) => <Button value={value} number={!isNaN(value)} />)}
    </div>
  </div>
)};

export default App;
