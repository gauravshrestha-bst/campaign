import React from 'react';
import axios from 'axios';
const $ = window.$;

class AddRule extends React.Component{

	state={
		ruleName:'',
		campaign:'Campaign A',
		schedule:'15 minutes',
		action:'Notify',
		conditions: {
			eCPM: 0,
			eCPC: 0,
			eCPCI: 0,
			installs: 0,
			impressions: 0,
			spend: 0,
			clicks: 0
		}
	}
	handleChange=(event)=> {
        this.setState({
            [event.target.name]: event.target.value
        })
	}
	handleSubmit=(e)=>{
		//make axios request 
		e.preventDefault();

		const formData = $('#rulesForm').serializeArray();
		
		
		const postData = {
			ruleName: formData.filter(f => f.name === "ruleName")[0].value,
			campaign: formData.filter(f => f.name === "campaign")[0].value,
			schedule: formData.filter(f => f.name === "schedule")[0].value,
			action: formData.filter(f => f.name === "action")[0].value,
			conditions: {
				eCPM: formData.filter(f => f.name === "ecpm")[0].value,
				eCPC: formData.filter(f => f.name === "ecpc")[0].value,
				eCPCI: formData.filter(f => f.name === "ecpi")[0].value,
				installs: formData.filter(f => f.name === "installs")[0].value,
				impressions: formData.filter(f => f.name === "impressions")[0].value,
				spend: formData.filter(f => f.name === "spend")[0].value,
				clicks: formData.filter(f => f.name === "clicks")[0].value
			}
		}
	
		console.log(postData);

		axios
		.post('http://localhost:5000/Rule', postData)
		.then(response => {
			console.log(' response: ',response)
			this.setState(postData);
			
		}).catch(error => {
			console.log('login error: ',error)
			
		})
	}

	render(){
		return(
			
			<form className="ui form container" id="rulesForm" onSubmit={this.handleSubmit} action='/'>
				<div className="field">
					<label>Rule Name</label>
					<input onChange={this.handleChange} type="text" name="ruleName" placeholder="Rule Name"/>
				</div>
				<div className="field">
					<label>Campaign</label>
					<select name="campaign" onChange={this.handleChange}>
						<option>Campaign A</option>
						<option>Campaign B</option>
						<option>Campaign C</option>
						<option>Campaign D</option>
						<option>Campaign E</option>
					</select>	
				</div>
				<div className="field">
					<label>Schedule</label>
					<select onChange={this.handleChange} name="schedule"> 
						<option>15 minutes</option>
						<option>1 hour</option>
						<option>1 day</option>
					</select>	
				</div>
				<div className="field">
					<label>Conditions </label>
					<label>ECPM</label>
					<input onChange={this.handleChange} type="text" name="ecpm" placeholder="max"/>
					<label>ECPC</label>
					<input onChange={this.handleChange} type="text" name="ecpc" placeholder="max"/>
					<br></br>
					<label>ECPI</label>
					<input onChange={this.handleChange} type="text" name="ecpi" placeholder="max"/>
					<label>clicks</label>
					<input onChange={this.handleChange} type="text" name="clicks" placeholder="max"/>
					<br></br>
					<label>Install</label>
					<input onChange={this.handleChange} type="text" name="installs" placeholder="max"/>
					<label>Impression</label>
					<input onChange={this.handleChange} type="text" name="impressions" placeholder="max"/>
					<br></br>
					<label>spend</label>
					<input onChange={this.handleChange} type="text" name="spend" placeholder="max"/>
				
					
				</div>
				<div className="field">
					<label>Action</label>
					<select onChange={this.handleChange} name="action">
						<option>Notify</option>       
					</select>	
				</div>
				
				<button className="ui button" type="submit">Submit</button>
			</form>
		   
			)
	}
	
	
};

export default AddRule;