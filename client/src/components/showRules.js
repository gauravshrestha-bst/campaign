import React from 'react';

const RulesTable=({rules})=>{
    console.log(rules);
    const renderedList=rules.map(rule=>{
        return(
            <tr>
            <td>{rule.ruleName}</td>
            <td>{rule.campaigns}</td>
            <td class="negative">{rule.schedule}</td>
            <td>{rule.status}</td>
            <td>{rule.action}</td>
            <td ><a href='#'>Edit</a></td>
            </tr>
        )
    });
	return(
		<table class="ui celled table">
            <thead>
                <tr>
                <th>Rule Name</th>
                <th>Campaigns</th>
                <th>Scedule</th>
                <th>Status</th>
                <th>Action</th>
                <th>edit</th>
                </tr>
            </thead>
            <tbody>
                {renderedList}
            </tbody>
        </table>
		)
};

export default RulesTable;
