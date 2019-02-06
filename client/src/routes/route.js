import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import LoginForm from '../components/loginForm';
import campaignForm from '../components/campaignForm';
const Router=()=> {
    return (
      <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/addCampaign" component={campaignForm} />
                <Route exact path="/login" component={LoginForm} />
            </Switch>
        </div>
        </BrowserRouter>
        
    );
  }

  export default Router;
  
  