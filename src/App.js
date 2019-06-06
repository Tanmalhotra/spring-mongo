import React from 'react';
//import Creatable from 'react-select';
import { Creatable } from 'react-select';


/*const inputParsers = {
 
  uppercase(input) {
    return input.toUpperCase();
  },
  number(input) {
    return parseFloat(input);
  },
};*/


class App extends React.Component {
	
	
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
			isLoading: true,
		    selectedOption: null,
		    PIMS:'',
	    	  name:'',
	    	  teamName:'',
	    	  email:'',
	    	  CUID:'',
	    	  skill:[],
	    	  
		  };
   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
	    fetch(`http://localhost:8087/api/skills/`,{ method: 'GET',
	      headers:{
	    	  
	    	  "Acess-Contol-Allow-Origin":"*",
	    	  "Accept":"application/json",
	    	  "Access-Control-Allow-Methods":"*",
	    	  "Access-Control-Allow-Headers":"*",
	      },      
	      mode:'cors',

	      })
	      
	    .then(response => response.json())
	      .then(json => {
	          
	          var options = [];
	          for(var i=0;i<json.length;i++){
	        	  console.log(json[i]);
	        	  options.push({value:json[i].id,label:json[i].skill});
	        	
		          console.log(options);
	        	  
	         }
	          this.setState({data:options})
	    	  
	      });
	          
	    
	  }

 
    
    
  handleChange = (selectedOption) => {
	    this.setState({selectedOption});  
	    // this.setState= selectedOption.target.value;
	    console.log(`Option selected:`, selectedOption);
	    
	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	  }
  
  handleSubmit(event) {
	 /* console.log(event);*/
	
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
 /*   console.log(form);
	console.log(event);*/
	
	 /* console.log(event.target[0].value);
	  console.log(event.target[1].value);
	  console.log(event.target[2].value);
	  console.log(event.target[3].value);
	  console.log(event.target[4].value);*/
	  var select=this.state.selectedOption;
	  console.log("selected value");
	  console.log(select);
	  let label;
	  for(let i=0; i<select.length; i++){
		  if(i==0){
			  label = select[i]['label'];
		  }else{
			  label = label + ", "+select[i]['label'];
		  }
	  }
	 
	    console.log(label);
	    var labelTemp = label;
	    let value = event.target.value;
	    //this.setState({ type: value, label: label});
	
	  
    fetch('http://localhost:8087/api/users/', {
      method: 'POST',
      headers:{
    	  
    	  "Content-Type":"application/json",
    	  "Acess-Contol-Allow-Origin":"*",
    	  "Accept":"application/json",
    	  "Access-Control-Allow-Methods":"*",
    	  "Access-Control-Allow-Headers":"*",
      },      
      mode:'cors', 
      
      
      body:JSON.stringify({
    	  PIMS:event.target[0].value,
    	  name:event.target[1].value,
    	  teamName:event.target[2].value,
    	  email:event.target[3].value,
    	  CUID:event.target[4].value,
    	  Skills: labelTemp,
      })
    })
    .then(response => console.log(response))
    .catch(err => console.log(err));
	console.log(data);
  }
 

  render() {
	const { selectedOption } = this.state;
    return (
    		<div>
    		<center>
     <h1 className="head1"> WELCOME </h1>
     <h2 className="head2"> Kindly fill your details. </h2>
      <form name="form" onSubmit={this.handleSubmit}>
      
      <br />
      
    	 
      <input
      id="PIMS"
      name="PIMS"
      type="text"
    	  placeholder="PIMS"
      data-parse="uppercase"
      required
      
       
    /><br /><br />
    

        <input
        id="name"
        	name="name"
          ref="name"
          type="text"
        	  placeholder="Name"
          data-parse="uppercase"
         value={this.handleInputChange}
        /><br /><br />
        
    
   
      <input
      id="teamName"
    	  name="teamName"
      ref="teamName"
    	  placeholder="Team Name"
      type="text"
      data-parse="uppercase"
    	  required
    	 
    /><br /><br />
    
     
      
        <input ref="email" type="email"
        	name="name" id="name"
        		placeholder="E-mail"
        	/>
        	<br /><br />
        	

        <input
          ref="CUID"
        	  name="name" id="name"
          type="text"
        	  placeholder="CUID"
          data-parse="number"
        /><br /><br /><br />
        
        
        <Creatable
        name="skill"
        id="skill"
        ref="skill"
        
        isMulti={true}
        value={selectedOption}
        
        onChange={this.handleChange}
        options={this.state.data}
        placeholder="Select Your skill"
      /> <br />
        <br />
      
       

        <button type="submit" className="myButton">Send data!</button>
        
      </form>
      </center>
      </div>
    );
  }
}

/*async function copyOptionsForAsync() {
	  let response = await fetch("https://jsonplaceholder.typicode.com/todos");
	  let data = await response.json();
	  data.forEach(element => {
	    let dropDownEle = { label: element["skill"], value: element };
	    options1.push(dropDownEle);
	  });
	}*/


/*var options;
fetch('http://localhost:8087/api/skill/', {
	      method: 'GET',
	      headers:{
	    	  
	    	  "Acess-Contol-Allow-Origin":"*",
	    	  "Accept":"application/json",
	    	  "Access-Control-Allow-Methods":"*",
	    	  "Access-Control-Allow-Headers":"*",
	      },      
	      mode:'cors',

	      }).then(response => response.text())
	      .then(text => {
	          var json = JSON.parse(text);
	          console.log(json);
	          options = [];
	          for(var i=0;i<json.length;i++){
	        	  console.log(json[i]);
	        	  options.push({label:json[i].id,value:json[i].skill});
	        	  console.log("options");
	        	  console.log(options);
	          }
	          options = JSON.stringify(options);
	          console.log(options)
	          return text;
	        })*/

/*getskill(){
	   return fetch(`http://localhost:8087/api/skill/?q=${this.state.firstSelectValue}`)
	     .then((response) => response.json())
	     .then((json) => {
	        return { options: json.items };
	    });
	}
*/


export default App;