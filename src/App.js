import React from 'react';
import Select from 'react-select';

const inputParsers = {
 
  uppercase(input) {
    return input.toUpperCase();
  },
  number(input) {
    return parseFloat(input);
  },
};

class App extends React.Component {
	
	
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
			isLoading: true,
		    selectedOption: null,
		  };
   
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*handleInputChange(event) {
	  event.persist();
	    const target = event.target;
	    const value =target.value;
	    const name = target.name;

	    
	  }*/
  handleChange = (selectedOption) => {
	    this.setState({ selectedOption });
	    console.log(`Option selected:`, selectedOption);
	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	  }
  
  handleSubmit(event) {
	  console.log(event);
	var self=this;
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    console.log(form);
	console.log(event);
	
    for (let name of data.keys()) {
      const input = form.elements[name];
      const parserName = input.dataset.parse;

       
        const parser = inputParsers[parserName];
        const parsedValue = parser(data.get(name));
        data.set(name, parsedValue);
        console.log(name+"value"+parsedValue)
      
    }
    console.log("hello")
    console.log(this.state);
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
    	  PIMS:self.PIMS,
    	  name:self.name,
    	  teamName:self.teamName,
    	  email:self.email,
    	  CUID:self.CUID,
    	  Skills:self.selected,
    
      })
    })
    .then(response => console.log(response))
    .catch(err => console.log(err));
	console.log(data);
  }
 

  render() {
	  const { selectedOption } = this.state;
    return (
      <form name="form" onSubmit={this.handleSubmit}>
      <center>
      <br />
      PIMS:
      <input
      id="PIMS"
      type="text"
      data-parse="uppercase"
      required
      
    
    
      
     
    /><br /><br />
    
   name:
        <input
          ref="name"
          type="text"
          data-parse="uppercase"
         value={this.handleInputChange}
        /><br /><br />
        
    
      teamName:
      <input
      ref="teamName"
      type="text"
      data-parse="uppercase"
    	  required
    	 
    /><br /><br />
    
     
      email:
        <input ref="email" type="email"
        	/>
        	<br /><br />
        	
        CUID:
        <input
          ref="CUID"
          type="text"
          data-parse="number"
        /><br /><br />
        
        <div className="container">
        <Select
        ref="selected"
        isMulti={true}
        value={selectedOption}
        onChange={this.handleChange}
        options={options} 
        placeholder="Select Your Skills"
      /> <br />
      </div>    

        <button type="submit" >Send data!</button>
        </center>
      </form>
    );
  }
}

const options = [
	  { label: "Back-end", value: 1 },
	  { label: "Front-end", value: 2 },
	  { label: "DataBase", value: 3 },
	];

export default App;