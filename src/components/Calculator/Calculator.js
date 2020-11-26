import React, {useState} from 'react';
import Button from '../Button/Button'
import './styles.scss';

const App = () => {
  let buttons = ['C',',','+','-','÷','*','=',9,8,7,6,5,4,3,2,1,0]

  const [screenText, setScreenText] = useState("")

  const changeScreenValue = (keyPressed) => {
    const value = keyPressed.querySelector('p') 
    ? keyPressed.querySelector('p').textContent
    : keyPressed.textContent
  };

  return(
  <div className="app">
    <p className="screen">{screenText}</p>
    <div className="buttons-wrapper">
      {buttons.map((value) => <Button key={value} value={value} number={!isNaN(value)} setScreenText={changeScreenValue} />)}
    </div>
  </div>
)};

export default App;
