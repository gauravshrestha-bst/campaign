import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Main from '../components/Main';
import LoginForm from '../components/loginForm';
import ruleForm from '../components/ruleForm';
const Router=()=> {
    return (
      <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/addRule" component={ruleForm} />
                <Route exact path="/login" component={LoginForm} />
            </Switch>
        </div>
        </BrowserRouter>
        
    );
  }

  export default Router;
  
  