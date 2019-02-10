import React from 'react';
import axios from 'axios';
import AddRuleButton from './addRuleButton';
import RulesTable from './showRulesTable';

class Main extends React.Component{
    state={
        rules:[]
    }
    componentDidMount(){
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
    render(){
        return(
            <div>
                <AddRuleButton/>
                <RulesTable rules={this.state.rules}/>
            </div>
            )
    }
	
};

export default Main;