import React from 'react';
import {Link, Route, IndexRoute, BrowserRouter, Switch } from 'react-router-dom';
import OTP from './OTP';
import MainPage from './MainPage';

import {
	
	} from 'react-router-dom'

class start extends React.Component{

render(){
     
     return(
<div className='start'>
     <center>

     <input ref="email" type="email"
      name="name" id="name" 
      pattern="^[a-zA-Z0-9_.-]+@(orange)\.com$"
      required
      placeholder="E-mail"
       />< br />

			 <Link  to='/OTP'><button type="submit" className="myButton">Generate OTP</button></Link>
		
			
	 </center>
</div>
			);
		 }
			
	};
export default start;