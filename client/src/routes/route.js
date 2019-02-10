import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Main from '../components/Main';
import LoginForm from '../components/loginForm';
import ruleForm from '../components/ruleForm';
import axios from 'axios';
class Router extends React.Component {
    state={
        isLoggedIn:false
    }
    componentDidMount(){
        axios
        .get('http://localhost:5000/')
        .then(response => {
			console.log(response)
			
		}).catch(error => {
			console.log('error: ')
			console.log(error);	
		})
    }
    render(){
        return (
            <BrowserRouter>
              <div>
                  <Switch>
                      if(this.state.isLoggedIn){
                        <Route exact path="/" component={Main} />
                      }
                      if(this.state.!isLoggedIn){
                        <Route exact path="/" component={LoginForm} />
                      } 
                      <Route exact path="/addRule" component={ruleForm} />
                      <Route exact path="/login" component={LoginForm} />
                  </Switch>
              </div>
              </BrowserRouter>
              
          );
    }
    
  }

  export default Router;
  
  