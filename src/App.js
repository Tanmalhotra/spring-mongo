import React from 'react';
import {Link, Route, IndexRoute, Router, Switch } from 'react-router-dom';
import OTP from './OTP';
import MainPage from './MainPage';
import start from './start';
import history from './history';
import { withRouter } from 'react-router-dom';

class App extends React.Component{

  render(){
	  return(
     <div className='App'>

		 
<Router history={history}>
		<Switch> 
			<Route exact path='/' component={start} />
			<Route path="/OTP" component={OTP} />
            <Route path="/MainPage" component={MainPage} />
		</Switch>
		</Router>
     </div>
			);
		  }
			
		};
export default withRouter(App);