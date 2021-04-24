import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Devtools } from '@ui-devtools/tailwind';

ReactDOM.render(
  <Devtools>
    <App />
  </Devtools>,
  document.getElementById('root')
);
