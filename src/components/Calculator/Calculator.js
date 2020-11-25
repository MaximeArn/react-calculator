import React from 'react';
import Button from '../Button/Button'
import './styles.scss';

const App = () => {

  let buttons = [0,1,2,3,4,5,6,7,8,9,'+','-','÷','*','=','C']

  return(
  <div className="app">
    <p className="screen">0=10/5</p>
   {buttons.map((value) => <Button value={value} number={!isNaN(value)} />)}
  </div>
)};

export default App;
