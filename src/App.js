import React from 'react';
import { Route, IndexRoute, BrowserRouter, Switch } from 'react-router-dom';
import OTP from './OTP';
import MainPage from './MainPage';

import {
	Link
	} from 'react-router-dom'

class App extends React.Component{

  render(){
	  return(
  <div className='App'>
  <center>

<input placeholder="Enter E-mail"></input>< br />

			  <Link  to='/OTP'><button type="submit" className="myButton">Generate OTP</button></Link>
			  
			
			  </center>
			
			<div> <Switch> <Route path="/" component={App}>
			<Route path="/OTP" component={OTP} />
   <Route path="/MainPage" component={MainPage} /></Route></Switch>
   </div>
			</div>
			);
			}
			
		};
export default App;