import React from 'react';
import {Link, Route, IndexRoute, BrowserRouter, Switch } from 'react-router-dom';
import OTP from './OTP';
import MainPage from './MainPage';
import history from './history';
import { withRouter } from 'react-router-dom';



class start extends React.Component {

constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {

	    	  email:'',
              id:'', 
              OTP:'',  
              data:[],	    	  
          };
        }
          
handleSubmit(event) {
    
    /*<BrowserRouter history={history}>
    <Link  to='/OTP' ><button type="submit" className="myButton" >Generate OTP</button></Link></BrowserRouter>
*/
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

      fetch('http://localhost:9000/api/mail', {
      method: 'get',
      headers:{
    	  
    	  "Content-Type":"application/json",
    	  "Acess-Contol-Allow-Origin":"*",
    	  "Accept":"application/json",
    	  "Access-Control-Allow-Methods":"*",
    	  "Access-Control-Allow-Headers":"*",
      },      
      mode:'cors', 
      
  
    })
    
    .then(response => console.log(response))
    .catch(err => console.log(err));
    console.log(data);	
    history.push('/OTP');
  }

  renderInput = props => {
    delete props.value;
    return (
      <div class='Select-input' style={{ display: 'inline-block' }}>
        <input {...props}/>
      </div>
    )
  }

render(){
     
     return(
<div className='start'>
     <center>
     <form onSubmit={this.handleSubmit.bind(this)}>

     <input ref="email" type="email"
      name="name" id="name" 
      pattern="^[a-zA-Z0-9_.-]+@(orange)\.com$"
      required
      placeholder="E-mail"
       />< br />
            
             <button type="submit" className="myButton" 
             >Generate OTP</button></form>
		
			
	 </center>
</div>
			);
		 
			
    }
}

export default withRouter(start);


