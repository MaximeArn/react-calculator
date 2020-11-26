import React, {useState} from 'react';
import Button from '../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

import './styles.scss';

const App = () => {
  let buttons = ['C',',','+','-','÷','*','=',9,8,7,6,5,4,3,2,1,0]

  const [theme, setTheme] = useState('light');
  const [screenText, setScreenText] = useState("");

  const changeScreenValue = (keyPressed) => {
    const value = keyPressed.querySelector('p') 
    ? keyPressed.querySelector('p').textContent
    : keyPressed.textContent

    value === "C"
    ? setScreenText("")
    : value === "=" 
      ? calculateResult()
      : setScreenText(screenText + value)
  };

  const calculateResult = () => {
    const cleanifiedText = screenText.replaceAll('÷','/').replaceAll(',','.')
    setScreenText(eval(cleanifiedText).toFixed(2))
  };

  const toggletheme = (actualTheme) =>{
    console.log(actualTheme);
    actualTheme === 'light' 
    ? setTheme('dark')
    : setTheme('light');
  }

  return(
    <div className={`background ${theme}`}>
    {theme === "light"
    ? <FontAwesomeIcon className="theme-icon" icon={faSun} onClick={() => toggletheme(theme)} />
    : <FontAwesomeIcon className="theme-icon" icon={faMoon} onClick={() => toggletheme(theme)} />
    }
    
    <div className="app">
      <p className="screen">{screenText}</p>
      <div className="buttons-wrapper">
        {buttons.map((value) => <Button key={value} value={value} number={!isNaN(value)} setScreenText={changeScreenValue} />)}
      </div>
      <img src="" alt=""/>
    </div>
  </div>
)};

export default App;
