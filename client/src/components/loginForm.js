import React from 'react';
import axios from 'axios';
class LoginForm extends React.Component{
	state={
		username:'',
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
		console.log(this.state);

		axios
		.post('http://localhost:5000/login', {
			username: this.state.username,
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
			<form onSubmit={this.handleSubmit} className="ui form container" method="POST">
				<div className="field">
					<label>Username</label>
					<input onChange={this.handleChange} type="text" name="username" placeholder="Username"/>
				</div>
				<div class="field">
					<label>Password</label>
					<input onChange={this.handleChange} type="password" name='password' placeholder="Password"/>
				</div>
				<button class="ui button" type="submit" >Submit</button>
			</form>
			)
	}
	
};

export default LoginForm;