import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from '../components/home';
import LoginForm from '../components/loginForm';
import ruleForm from '../components/ruleForm';
const Router=()=> {
    return (
      <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/addRule" component={ruleForm} />
                <Route exact path="/login" component={LoginForm} />
            </Switch>
        </div>
        </BrowserRouter>
        
    );
  }

  export default Router;
  
  