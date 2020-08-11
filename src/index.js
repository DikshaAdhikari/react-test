import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const css = {
};
let date = new Date().getHours();
let greet ="";

if(date > 1 && date < 12){
  greet = "Morning";
  css.color = "orange"
}
else if(date >= 12 && date < 16){
  greet = "Afternoon";
  css.color = "orange"
}
else if(date >= 16 && date < 21){
  greet = "Evening";
  css.color = "orange"
}
else{
  greet = "Night"
  css.color = "orange"
}
ReactDOM.render(
  <>
    <h1>Hello Sir, <span style= {css}>Good {greet}!</span></h1>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
