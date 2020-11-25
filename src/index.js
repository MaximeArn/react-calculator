import React from 'react';
import { render } from 'react-dom';

import App from 'src/components/Calculator/Calculator.js';

const rootReactElement = <App />;

const target = document.getElementById('root');

render(rootReactElement, target);
