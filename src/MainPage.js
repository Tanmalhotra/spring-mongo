import React from 'react';
import App from './App';
import routes from './routes';

import Creatable from 'react-select/creatable';

class MainPage extends React.Component {
	
  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
			isLoading: true,
		    selected: [],
		    selectedTool: [],
		    selectedLang: [],
		    PIMS:'',
		    data:[],
		    dataL:[],
		    dataT:[],
	    	  name:'',
	    	  teamName:'',
	    	  email:'',
	    	  CUID:'',
	    	  skill:[],
	    	  tools:[],
	    	  Languages:[],
	    	  id:'',  
	    	  
	    	  	    	  
		  };
   
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeTool = this.handleChangeTool.bind(this);
    this.handleSelectTool=this.handleSelectTool.bind(this);
    this.handleChangeLang = this.handleChangeLang.bind(this);
    this.handleSelectLang=this.handleSelectLang.bind(this);
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
      this.handleSelect=this.handleSelect.bind(this);

	  fetch('http://localhost:9000/api/skills/', {
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
	    console.log(selectedOption);
	    }
	    )
	    .catch(err => console.log(err));
	  
	  fetch(`http://localhost:9000/api/skills/`,{ method: 'GET',
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
	    

	  console.log("printing state");
	  console.log(this.state);
	 console.log(selectedOption);
	 
	 this.handleChange = this.handleChange.bind(this);
	  
  }
  
  handleSelectTool=(selectedOption)=>{
      console.log(`Option selected on creation is:`, selectedOption);
      let select=this.state.selectedTool;
      


	  fetch('http://localhost:9000/api/tools/', {
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
	    	  tool:selectedOption, 
	      })
	    })
	    .then(response => response.json())
	    .then(json => {
	    
	    console.log(json)

	    select.push({value:json.id,label:json.tool});
	    this.setState({selectedTool:select}); 
	    this.setState({dataT:select}); 
	    }
	    )
	    .catch(err => console.log(err));
	  
	  fetch(`http://localhost:9000/api/tools/`,{ method: 'GET',
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
	        	  options.push({value:json[i].id,label:json[i].tool});
	        	
		          console.log(options);
	        	  
	         }
	          this.setState({dataT:options})
	          this.handleSelectTool=this.handleSelectTool.bind(this);
	  	      this.handleChangeTool = this.handleChangeTool.bind(this);

	    	  
	      });

	  console.log("printing state");
	  console.log(this.state);
	 console.log(selectedOption);
	this.handleChangeTool = this.handleChangeTool.bind(this);
	this.handleSelectTool=this.handleSelectTool.bind(this);
	  
  }
  
  handleSelectLang=(selectedOption)=>{
      console.log(`Option selected on creation is:`, selectedOption);
      let select=this.state.selectedLang;
      this.handleSelectLang=this.handleSelectLang.bind(this);


	  fetch('http://localhost:9000/api/languages/', {
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
	    	  language:selectedOption, 
	      })
	    })
	    .then(response => response.json())
	    .then(json => {
	    
	    console.log(json)

	    select.push({value:json.id,label:json.language});
	    this.setState({selectedLang:select}); 
	    this.setState({dataL:select}); 
	    console.log();
	    }
	    )
	    .catch(err => console.log(err));
	  
	  fetch(`http://localhost:9000/api/languages/`,{ method: 'GET',
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
	        	  options.push({value:json[i].id,label:json[i].language});
	        	
		          console.log(options);
	        	  
	         }
	          this.setState({dataL:options})
	          this.handleSelectLang=this.handleSelectLang.bind(this);
	  	      this.handleChangeLang = this.handleChangeLang.bind(this);
  
	      });

	  console.log("printing state");
	  console.log(this.state);
	 console.log(selectedOption);
	 this.handleChangeLang = this.handleChangeLang.bind(this);	  
  }
  
  componentDidMount() {
	    fetch(`http://localhost:9000/api/skills/`,{ method: 'GET',
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
	    
	    fetch(`http://localhost:9000/api/tools/`,{ method: 'GET',
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
		        	  options.push({value:json[i].id,label:json[i].tool});
		        	
			          console.log(options);
		        	  
		         }
		          this.setState({dataT:options})
		          this.handleSelectTool=this.handleSelectTool.bind(this);
		  	      this.handleChangeTool = this.handleChangeTool.bind(this);

		    	  
		      });
	    
	    fetch(`http://localhost:9000/api/languages/`,{ method: 'GET',
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
		        	  options.push({value:json[i].id,label:json[i].language});
		        	
			          console.log(options);
		        	  
		         }
		          this.setState({dataL:options})
		          this.handleSelectLang=this.handleSelectLang.bind(this);
		  	      this.handleChangeLang = this.handleChangeLang.bind(this);

		    	  
		      });
	           	  }

  handleChange = (selectedOption) => {
	    this.setState({selected:selectedOption});  
	    console.log(`Option selected:`, selectedOption);
        this.handleSelect=this.handleSelect.bind(this);

	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	  }
  
  handleChangeTool = (selectedOption) => {
	    this.setState({selectedTool:selectedOption});  
	    console.log(`Option selected:`, selectedOption);
      this.handleSelectTool=this.handleSelectTool.bind(this);

	    this.handleChangeTool = this.handleChangeTool.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	  }

  handleChangeLang = (selectedOption) => {
	    this.setState({selectedLang:selectedOption});  
	    console.log(`Option selected:`, selectedOption);
    this.handleSelectLang=this.handleSelectLang.bind(this);

	    this.handleChangeLang = this.handleChangeLang.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	  }

  
  handleSubmit(event) {
	this.handleChange = this.handleChange.bind(this);
	this.handleSelect = this.handleSelect.bind(this);
	this.handleSelectTool=this.handleSelectTool.bind(this);
    this.handleChangeTool = this.handleChangeTool.bind(this);
    this.handleSelectLang=this.handleSelectLang.bind(this);
    this.handleChangeLang = this.handleChangeLang.bind(this);
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

	  var select=this.state.selected;
	  var selectTool=this.state.selectedTool;
	  var selectLang=this.state.selectedLang;
	  
	  console.log("selected value");
	  console.log(select);
	  console.log(selectTool);
	  let label; let labelTool; let labelLang;
	  
	  for(let i=0; i<select.length; i++){
		  if(i===0){
			  label = select[i]['label'];
		  }else{
			  label = label + ", "+select[i]['label'];
		  }
	  }
	  
	  for(let i=0; i<selectTool.length; i++){
		  if(i===0){
			  labelTool = selectTool[i]['label'];
		  }else{
			  labelTool = labelTool + ", "+selectTool[i]['label'];
		  }
	  }
	  for(let i=0; i<selectLang.length; i++){
		  if(i===0){
			  labelLang = selectLang[i]['label'];
		  }else{
			  labelLang = labelLang + ", "+selectLang[i]['label'];
		  }
	  }
	    console.log(label);
	    var labelTemp = label;
	    var labelT=labelTool;
	    var labelL=labelLang;
	
	  console.log(labelTemp);
	  console.log(labelT);
	  console.log(labelT);

      fetch('http://localhost:9000/api/users/', {
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
    	  tools: labelT,
    	  Languages: labelL,
      })
    })
    
    .then(response => console.log(response))
    .catch(err => console.log(err));
	console.log(data);	
  }
 
  render() {
	const { selected } = this.state;
	const { selectedTool } = this.state;
	const { selectedLang } = this.state;
	
    return (
    		<div>
    		<center>
     
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
    	    	 
    /><br /><br />
    
        <input ref="email" type="email"
        	    name="name" id="name" value={this.email}
				placeholder="E-mail"
				pattern="^[a-zA-Z0-9_.-]+@(orange)\.com$"
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
        openMenuOnFocus={ true }
        placeholder="Select Skill/Methodologies"
        	
      /> <br />
        <br />     

        <Creatable
        name="tool"
        id="tool"
        ref="tool"      
        isMulti={true}
        value={selectedTool}
        onChange={this.handleChangeTool}
        onCreateOption={this.handleSelectTool}
        options={this.state.dataT}
        onSelectResetsInput={false}
        onBlurResetsInput={false}
        onCloseResetsInput={false}
        arrowRenderer={() => null}
        clearRenderer={() => null}
        allowCreate={true}
        inputRenderer={this.renderInput} 
        placeholder="Select Your Tool"
        	
      /> <br />
        <br />     
        
        <Creatable
        name="lang"
        id="lang"
        ref="lang"
        isMulti={true}
        value={selectedLang}
        onChange={this.handleChangeLang}
        onCreateOption={this.handleSelectLang}
        options={this.state.dataL}
        onSelectResetsInput={false}
        onBlurResetsInput={false}
        openOnFocus={true}
        onCloseResetsInput={false}
        arrowRenderer={() => null}
        clearRenderer={() => null}
        allowCreate={true}
        inputRenderer={this.renderInput} 
        required
        placeholder="Select Your Language"
      /> <br />
        <br />     

        <button type="submit" className="myButton">Send data!</button>
        
      </form>
      </center>
      </div>
    );
  }
}

export default MainPage;