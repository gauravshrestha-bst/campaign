import React from 'react';
import LoginForm from './loginForm';
import AddRuleButton from './addRuleButton';
import RulesTable from './showRules';

import axios from 'axios';
class App extends React.Component {
    state={
        isLoggedIn:false,
        rules:[]
    }
    handleLogInState=(value)=>{
        this.setState({isLoggedIn:value});
    }
    componentDidMount(){
        axios
        .get('http://localhost:5000/')
        .then(response => {
            console.log(response);
            if(response.data==='Authenticated'){
                this.setState({isLoggedIn:true});
            }
            else{
                this.setState({isLoggedIn:false});
            }
			
		}).catch(error => {
			console.log('error: ')
            console.log(error);	
            this.setState({isLoggedIn:false});
        });
        
        axios
		.get('http://localhost:5000/Rules')
		.then(response => {
			console.log('login response: ')
            console.log(response);
            this.setState({'rules':response.data});			
		}).catch(error => {
			console.log('login error: ')
			console.log(error);	
		})

    }
    handleLogout=()=>{
        axios
        .get('http://localhost:5000/logout')
        .then(response => {
			console.log(response)
			this.setState({isLoggedIn:false});
		}).catch(error => {
			console.log('error: ')
            console.log(error);	
            this.setState({isLoggedIn:true});
		})
    }
    
    render(){
        if(this.state.isLoggedIn){
            return(
                <div>
                    <button  onClick={this.handleLogout}>Logout</button>
                    <AddRuleButton/>
                    <RulesTable rules={this.state.rules}/>
                </div>
            )
        }
        else{
            return(
                <LoginForm handleLogInState={this.handleLogInState}/>
            )
        }
        
    }
    
  }

  export default App;
  
  