import React from 'react';
import { Route, IndexRoute, BrowserRouter, Switch } from 'react-router-dom';
import MainPage from './MainPage';
import App from './App';

import './OTP.css';
import { withRouter } from 'react-router-dom';

import {
	Link
	} from 'react-router-dom'

class OTP extends React.Component{

  render(){
	  return(
  <div className='App'>
  <center>

<input placeholder="Enter OTP "></input>< br />

			  <Link  to='/MainPage'><button type="submit" className="myButton">Done</button></Link>
              
			
			  </center>
			
			</div>
			);
			}
			
		};
export default withRouter(OTP);