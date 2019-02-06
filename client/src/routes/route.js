import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import LoginForm from '../components/loginForm';
const Router=()=> {
    return (
      <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/login" component={LoginForm} />
            </Switch>
        </div>
        </BrowserRouter>
        
    );
  }

  export default Router;
  
  