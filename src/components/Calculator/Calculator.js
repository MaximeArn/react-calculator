import React from 'react';
import Button from '../Button/Button'
import './styles.scss';

const App = () => {
  let buttons = []
  for (let index = 0; index < 9; index++) {
    buttons.push(index)
  }
  return(
  <div className="app">
   {buttons.map((value) => <Button value={value} />)}
  </div>
)};

export default App;
