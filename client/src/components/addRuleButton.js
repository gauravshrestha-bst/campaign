// import React from 'react';

// const AddRuleButton=()=>{
// 	return(
// 		<form class="ui form container">
// 			<a class="ui button" type="submit" href='/addRule'>Add Rule</a>
// 		</form>
// 		)
// };

// export default AddRuleButton;


import React from "react";
import AddRule from './addRule';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const AddRuleButton = () => (
  <Router>
    <div class="ui form container">
		<button class="ui button">
		<Link to="/addRule">Add Rule</Link>
		</button>

      <Route path="/addRule" component={AddRule} />
    </div>
  </Router>
);

export default AddRuleButton;