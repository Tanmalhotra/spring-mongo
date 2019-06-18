import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import App from './App';
import OTP from './OTP';
import MainPage from './MainPage';

class routes extends React.Component{

  render(){
	  return(
  <BrowserRouter> 
  <div>
  <Switch>
  <Route  path="/" component={App}>
    <Route path="/OTP" component={OTP}></Route>
  <Route path="/MainPage" component={MainPage} />
    
   
  </Route>
  </Switch>
  </div></BrowserRouter>)

}
};
export default routes;
