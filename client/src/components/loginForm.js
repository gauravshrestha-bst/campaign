import React from 'react';
import axios from 'axios';
class LoginForm extends React.Component{
	state={
		email:'',
		password:''
	}
	handleChange=(event)=> {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
	handleSubmit=(e)=>{
		//make axios request 
		e.preventDefault();
		console.log(this.state.email);
		console.log(this.state.password);

		axios.post('http://localhost:5000/login', {
			email: this.state.email,
			password: this.state.password
		})
		.then(response => {
			console.log('login response: ')
			console.log(response)
			// if (response.status === 200) {
			// 	// update App.js state
			// 	this.props.updateUser({
			// 		loggedIn: true,
			// 		username: response.data.username
			// 	})
			// 	// update the state to redirect to home
			// 	this.setState({
			// 		redirectTo: '/'
			// 	})
			// }
		}).catch(error => {
			console.log('login error: ')
			console.log(error);
			
		})

	}
	render(){
		return(
			<form className="ui form container">
				<div className="field">
					<label>Email</label>
					<input onChange={this.handleChange} type="email" name="email" placeholder="Email"/>
				</div>
				<div className="field">
					<label>Password</label>
					<input onChange={this.handleChange} type="password" name='password' placeholder="Password"/>
				</div>
				<button className="ui button" type="submit" onClick={this.handleSubmit}>Submit</button>
			</form>
			)
	}
	
};

export default LoginForm;