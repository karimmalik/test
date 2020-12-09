import React, { Component } from 'react';

var rest, mime, errorCode, client;
rest = require('rest'),
mime = require('rest/interceptor/mime');
errorCode = require('rest/interceptor/errorCode');
 
client = rest.wrap(mime).wrap(errorCode);

class Create extends Component {

	constructor(props) {
		super(props);
		this.state = {
				  userName: '',
				  age: '',
				  resultStatus: ''
				};

		this.handleChange = this.handleChange.bind(this);
		this.submit = this.submit.bind(this);
	}
	
	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		

		this.setState({
		  [name]: value
		});
	}
	
	submit(event){
		var today = new Date();
	    var birthDate = new Date(this.state.age);  
	    var age_now = today.getFullYear() - birthDate.getFullYear();
	    var m = today.getMonth() - birthDate.getMonth();
	    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
	    {
	        age_now--;
	    }
		console.log(age_now);
		
		// 101
		if (age_now>=1 && age_now<=20) {
		this.setState({resultStatus: "101"});
		var form_data={
				userName: this.state.userName,
		        age: age_now				        
		    };
		
		client({
			method: 'POST',
		    path: '/process/age1',
		    headers: {
		        'Content-Type': 'application/json'
		    },
		    entity : JSON.parse(JSON.stringify(form_data))
		
		})
		.then(
				response => {
		            console.log("create" + response.status);
		            this.setState( {resultStatus: response.status.code} );
		            if(this.state.resultStatus == "101"){
		            	this.setState({
		          		  userName: '',
		          		  age:''
		          		});
		            }
		        }
			);
		console.log("create01");
		event.preventDefault();
		}
		
		// 102
		if (age_now>=21 && age_now<=50) {
		this.setState({resultStatus: "102"});
		var form_data={
				userName: this.state.userName,
		        age: age_now				        
		    };
		
		client({
			method: 'POST',
		    path: '/process/age2',
		    headers: {
		        'Content-Type': 'application/json'
		    },
		    entity : JSON.parse(JSON.stringify(form_data))
		
		})
		.then(
				response => {
		            console.log("create" + response.status);
		            this.setState( {resultStatus: response.status.code} );
		            if(this.state.resultStatus == "102"){
		            	this.setState({
		          		  userName: '',
		          		  age:''
		          		});
		            }
		        }
			);
		console.log("create02");
		event.preventDefault();
		}
		if (age_now>=51) {
		this.setState({resultStatus: "200"});
		var form_data={
				userName: this.state.userName,
		        age: age_now				        
		    };
		
		client({
			method: 'POST',
		    path: '/process/age3',
		    headers: {
		        'Content-Type': 'application/json'
		    },
		    entity : JSON.parse(JSON.stringify(form_data))
		
		})
		.then(
				response => {
		            console.log("create" + response.status);
		            this.setState( {resultStatus: response.status.code} );
		            if(this.state.resultStatus == "200"){
		            	this.setState({
		          		  userName: '',
		          		  age:''
		          		});
		            }
		        }
			);
		console.log("create03");
		event.preventDefault();
		}
	}
		
	
		
    render() {
	const resultStatus = this.state.isLoggedIn;
	let fieldset;
	if(resultStatus=="101"){
		fieldset = 
		<fieldset style="background-color:blue;">
		  <legend>Please enter your details 101-</legend>
		  <form onSubmit={this.submit}>
			<table>
				<tbody>
				<tr>
					<td>Enter UserName</td>
					<td><input	name="userName" type="text" value={this.state.userName} onChange={this.handleChange} /></td></tr>
				<tr>
					<td>Enter your birth date</td>
					<td><input name="age" type="date" value={this.state.age} onChange={this.handleChange} /></td></tr>
				<tr>
					<td><button name="submit" onSubmit={this.submit} >Submit</button></td>
					</tr>
				</tbody>
			</table>
		  </form>
		  </fieldset>;
	}
	
	if(resultStatus=="102"){
		fieldset = 
		<fieldset style="background-color:red;">
		  <legend>Please enter your details 102-</legend>
		  <form onSubmit={this.submit}>
			<table>
				<tbody>
				<tr>
					<td>Enter UserName</td>
					<td><input	name="userName" type="text" value={this.state.userName} onChange={this.handleChange} /></td></tr>
				<tr>
					<td>Enter your birth date</td>
					<td><input name="age" type="date" value={this.state.age} onChange={this.handleChange} /></td></tr>
				<tr>
					<td><button name="submit" onSubmit={this.submit} >Submit</button></td>
					</tr>
				</tbody>
			</table>
		  </form>
		  </fieldset>;
	}
	
	if(resultStatus=="200"){
		fieldset = 
		<fieldset style="background-color:grey;">
		  <legend>Please enter your details 200-</legend>
		  <form onSubmit={this.submit}>
			<table>
				<tbody>
				<tr>
					<td>Enter UserName</td>
					<td><input	name="userName" type="text" value={this.state.userName} onChange={this.handleChange} /></td></tr>
				<tr>
					<td>Enter your birth date</td>
					<td><input name="age" type="date" value={this.state.age} onChange={this.handleChange} /></td></tr>
				<tr>
					<td><button name="submit" onSubmit={this.submit} >Submit</button></td>
					</tr>
				</tbody>
			</table>
		  </form>
		  </fieldset>;
	}

	if(resultStatus==""){
		fieldset = 
		<fieldset style="background-color:#3255a8;">
		  <legend>Please enter your details null</legend>
		  <form onSubmit={this.submit}>
			<table>
				<tbody>
				<tr>
					<td>Enter UserName</td>
					<td><input	name="userName" type="text" value={this.state.userName} onChange={this.handleChange} /></td></tr>
				<tr>
					<td>Enter your birth date</td>
					<td><input name="age" type="date" value={this.state.age} onChange={this.handleChange} /></td></tr>
				<tr>
					<td><button name="submit" onSubmit={this.submit} >Submit</button></td>
					</tr>
				</tbody>
			</table>
		  </form>
		  </fieldset>;
	}
      return (
	
    		  <div>
    		    {
    	            this.state.resultStatus == "201" ?
    	                <h2>Process success</h2>
    	            : null
    	        }
				
				{
					this.state.resultStatus == "" ?
					<fieldset>
								  <legend>Please enter your details 0</legend>
								  <form onSubmit={this.submit}>
									<table>
										<tbody>
										<tr>
											<td>Enter UserName</td>
											<td><input	name="userName" type="text" value={this.state.userName} onChange={this.handleChange} /></td></tr>
										<tr>
											<td>Enter your birth date</td>
											<td><input name="age" type="date" value={this.state.age} onChange={this.handleChange} /></td></tr>
										<tr>
											<td><button name="submit" onSubmit={this.submit} >Submit</button></td>
											</tr>
										</tbody>
									</table>
								  </form> 
								  </fieldset>
						:null
				}  
				
				{
					
					this.state.resultStatus == "101" ?
					<div style={{
				        backgroundColor: 'green'
				      }}>
					<fieldset>
					  <legend>Please enter your details 101</legend>
					  <form onSubmit={this.submit}>
						<table>
							<tbody>
							<tr>
								<td>Enter UserName</td>
								<td><input	name="userName" type="text" value={this.state.userName} onChange={this.handleChange} /></td></tr>
							<tr>
								<td>Enter your birth date</td>
								<td><input name="age" type="date" value={this.state.age} onChange={this.handleChange} /></td></tr>
							<tr>
								<td><button name="submit" onSubmit={this.submit} >Submit</button></td>
								</tr>
							</tbody>
						</table>
					  </form>
					  </fieldset>
					</div>
						:null
				}  
				
				{
					this.state.resultStatus == "102" ?
					<div style={{
				        backgroundColor: 'red'
				      }}>
					<fieldset>
					  <legend>Please enter your details 102</legend>
					  <form onSubmit={this.submit}>
						<table>
							<tbody>
							<tr>
								<td>Enter UserName</td>
								<td><input	name="userName" type="text" value={this.state.userName} onChange={this.handleChange} /></td></tr>
							<tr>
								<td>Enter your birth date</td>
								<td><input name="age" type="date" value={this.state.age} onChange={this.handleChange} /></td></tr>
							<tr>
								<td><button name="submit" onSubmit={this.submit} >Submit</button></td>
								</tr>
							</tbody>
						</table>
					  </form>
					  </fieldset>
					</div>
						:null
				}  
				 
				{
					this.state.resultStatus == "200" ?
					<div style={{
				        backgroundColor: 'blue'
				      }}>
					<fieldset>
								  <legend>Please enter your details 200</legend>
								  <form onSubmit={this.submit}>
									<table>
										<tbody>
										<tr>
											<td>Enter UserName</td>
											<td><input	name="userName" type="text" value={this.state.userName} onChange={this.handleChange} /></td></tr>
										<tr>
											<td>Enter your birth date</td>
											<td><input name="age" type="date" value={this.state.age} onChange={this.handleChange} /></td></tr>
										<tr>
											<td><button name="submit" onSubmit={this.submit} >Submit</button></td>
											</tr>
										</tbody>
									</table>
								  </form>
								  </fieldset>
						</div>
						:null
						
				}  
				
				  
				  <br/>			    	 
	    	        
			  </div>
      );
    }
}

export default Create;
