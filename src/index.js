import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Route, IndexRoute, BrowserRouter, Switch } from 'react-router-dom';
import MainPage from './MainPage';
import OTP from './OTP';
import * as serviceWorker from './serviceWorker';



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


ReactDOM.render((
<BrowserRouter>
<Switch>
  <App />
  </Switch>
</BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();