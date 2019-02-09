import React from 'react';
import axios from 'axios';
class AddRule extends React.Component{

	state={
		ruleName:'',
		campaign:'Campaign A',
		schedule:'15 minutes',
		ecpm:null,
		ecpc:null,
		ecpi:null,
		clicks:null,
		install:null,
		impression:null,
		spends:null,
		action:'Notify',
		conditions:{}
	}
	handleChange=(event)=> {
        this.setState({
            [event.target.name]: event.target.value
        })
	}
	handleSubmit=(e)=>{
		//make axios request 
		e.preventDefault();
		this.setState(
			{conditions:{
			ecpm:this.state.ecpm,
			ecpc:this.state.ecpc,
			ecpi:this.state.ecpi,
			clicks:this.state.clicks,
			install:this.state.install,
			impression:this.state.impression,
			spends:this.state.spends
		}});

		axios
		.post('http://localhost:5000/Rule', {
			ruleName: this.state.ruleName,
			campaign: this.state.campaign,
			schedule:this.state.schedule,
			action:this.state.action,
			conditions:this.state.conditions

		})
		.then(response => {
			console.log(' response: ')
			console.log(response)
			if (response.status === 200) {

			}
		}).catch(error => {
			console.log('login error: ')
			console.log(error);
			
		})
	}

	render(){
		return(
			
			<form className="ui form container" onSubmit={this.handleSubmit}>
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
					<input onChange={this.handleChange} type="text" name="install" placeholder="max"/>
					<label>Impression</label>
					<input onChange={this.handleChange} type="text" name="impression" placeholder="max"/>
					<br></br>
					<label>spends</label>
					<input onChange={this.handleChange} type="text" name="spends" placeholder="max"/>
				
					
				</div>
				<div className="field">
					<label>Action</label>
					<select onChange={this.handleChange} name="action">
						<option>Notify</option>       
					</select>	
				</div>
				
				<button class="ui button" type="submit">Submit</button>
			</form>
		   
			)
	}
	
	
};

export default AddRule;