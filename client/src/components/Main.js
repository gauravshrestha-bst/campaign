import React from 'react';
import AddRuleButton from './addRuleButton';
import RulesTable from './showRulesTable'
class Main extends React.Component{
    componentDidMount(){
        axios
		.get('http://localhost:5000/Rules')
		.then(response => {
			console.log('login response: ')
			console.log(response)
			
		}).catch(error => {
			console.log('login error: ')
			console.log(error);
			
		})

    }
    render(){
        return(
            <div>
                <AddRuleButton/>
                <RulesTable/>
            </div>
            )
    }
	
};

export default Main;