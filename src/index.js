import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.output.css'
import App from './App'
import { Router } from 'react-navi';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router routes={App} />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
