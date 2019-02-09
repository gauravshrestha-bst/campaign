import React from 'react';
import addRuleButton from './addRuleButton';

class Main extends React.Component{
    render(){
        return(
            <div>
                <addRuleButton/>
                <showRulesTable/>
            </div>
            )
    }
	
};

export default Main;