fetch('http://localhost:9000/api/users/'+id,{ method: 'GET',
	      headers:{
	    	  
	    	  "Acess-Contol-Allow-Origin":"*",
	    	  "Accept":"application/json",
	    	  "Access-Control-Allow-Methods":"*",
	    	  "Access-Control-Allow-Headers":"*",
	      },      
	      mode:'cors',

	      }).then(response => response.json())
	        .then(json => {
	          
              
            this.setState
              name:json.name,
	    	  teamName:json.teamName,
	    	  email:json.email,
	    	  CUID:json.CUID,
	    	  skill:json.skill,
	    	  tools:json.tools,
	    	  Languages:json.Languages,
	    	  id:json.id,




              <Route path='/:id' exact component={PostProfilePage} />