import React,{BrowserRouter as Router} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {TheContextProvider} from "./theContext.js"


ReactDOM.render(
  <TheContextProvider>
    <Router>
      <App />
    </Router>
  </TheContextProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
