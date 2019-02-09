import React from 'react';
import AddRuleButton from './addRuleButton';
import RulesTable from './showRulesTable'
class Main extends React.Component{
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