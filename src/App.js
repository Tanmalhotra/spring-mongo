import React from 'react';
import {Link, Route, IndexRoute, BrowserRouter, Switch } from 'react-router-dom';
import OTP from './OTP';
import MainPage from './MainPage';
import start from './start';

import {
	
	} from 'react-router-dom'

class App extends React.Component{

  render(){
	  return(
     <div className='App'>

		<Switch> 
			<Route exact path='/' component={start} />
			<Route path="/OTP" component={OTP} />
            <Route path="/MainPage" component={MainPage} />
		</Switch>

     </div>
			);
		  }
			
		};
export default App;