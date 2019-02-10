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
		console.log(this.state);

		axios
		.post('http://localhost:5000/login', {
			email: this.state.email,
			password: this.state.password
		})
		.then(response => {
			console.log('login response: ')
			console.log(response)
			if (response.status === 200) {
				console.log("login successfull");
				this.props.handleLogInState(true)
				}
		}).catch(error => {
			console.log('login error: ')
			console.log(error);
			this.props.handleLogInState(false)
			
		})

	}
	render(){
		return(
			<form onSubmit={this.handleSubmit} className="ui form container" method="post" action='/'>
			<h1>Login</h1>
				<div className="field">
					<label>Email</label>
					<input onChange={this.handleChange} type="email" name="email" placeholder="Email"/>
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