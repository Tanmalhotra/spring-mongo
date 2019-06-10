import React from 'react';

import Creatable from 'react-select/creatable';

class App extends React.Component {
	
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
			isLoading: true,
		    selected: null,
		    PIMS:'',
	    	  name:'',
	    	  teamName:'',
	    	  email:'',
	    	  CUID:'',
	    	  skill:[],
	    	  id:'',
	    	  seq:0,
	    	  	    	  
		  };
   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect=this.handleSelect.bind(this);
  }
  
  renderInput = props => {
	    delete props.value;
	    return (
	      <div class='Select-input' style={{ display: 'inline-block' }}>
	        <input {...props}/>
	      </div>
	    )
	  }
  
  handleSelect=(selectedOption)=>{
      console.log(`Option selected on creation is:`, selectedOption);
      let select=this.state.selected;
    
      
	    
	  fetch('http://localhost:8087/api/skills/', {
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
	    	  id:Math.random()*1000,
	    	  skill:selectedOption, 
	      })
	    })
	    .then(response => response.json())
	    .then(json => {
	    
	    console.log(json)

	    select.push({value:json.id,label:json.skill});
	    this.setState({selected:select}); 
	    this.setState({data:select}); 
	    console.log();
	    }
	    )
	    .catch(err => console.log(err));

	  console.log("printing state");
	  console.log(this.state);
	 console.log(selectedOption);
	  
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
	          this.handleSelect=this.handleSelect.bind(this);
	  	      this.handleChange = this.handleChange.bind(this);

	    	  
	      });
	           	  }

  handleChange = (selectedOption) => {
	    this.setState({selected:selectedOption});  
	    console.log(`Option selected:`, selectedOption);
        this.handleSelect=this.handleSelect.bind(this);

	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	  }

  handleSubmit(event) {
	this.handleChange = this.handleChange.bind(this);
	this.handleSelect = this.handleSelect.bind(this);
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

	  var select=this.state.selected;
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
	
	  console.log(labelTemp);
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
    	  skill: labelTemp,
      })
    })
    
    .then(response => console.log(response))
    .catch(err => console.log(err));
	console.log(data);
	console.log(labelTemp);
	
console.log(label.split(","));
	
  }
 
  render() {
	const { selected } = this.state;
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
        value={selected}
        onChange={this.handleChange}
        onCreateOption={this.handleSelect}
        options={this.state.data}
        onSelectResetsInput={false}
        onBlurResetsInput={false}
        onCloseResetsInput={false}
        arrowRenderer={() => null}
        clearRenderer={() => null}
        allowCreate={true}
        inputRenderer={this.renderInput} 
        
        
        
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

export default App;