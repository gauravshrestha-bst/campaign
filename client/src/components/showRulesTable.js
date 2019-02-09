import React from 'react';

const RulesTable=()=>{
	return(
		<table class="ui celled table">
            <thead>
                <tr>
                <th>Rule Name</th>
                <th>Campaigns</th>
                <th>Scedule</th>
                <th>Status</th>
                <th>Scedule</th>
                <th>edit</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>No Name Specified</td>
                <td>Unknown</td>
                <td class="negative">None</td>
                <td>No Name Specified</td>
                <td>Unknown</td>
                <td class="negative">None</td>
                </tr>
                <tr class="positive">
                <td>Jimmy</td>
                <td><i class="icon checkmark"></i> Approved</td>
                <td>None</td>
                <td>No Name Specified</td>
                <td>Unknown</td>
                <td class="negative">None</td>
                </tr>
                <tr>
                <td>Jamie</td>
                <td>Unknown</td>
                <td class="positive"><i class="icon close"></i> Requires call</td>
                <td>No Name Specified</td>
                <td>Unknown</td>
                <td class="negative">None</td>
                </tr>
                <tr class="negative">
                <td>Jill</td>
                <td>Unknown</td>
                <td>None</td>
                <td>No Name Specified</td>
                <td>Unknown</td>
                <td class="negative">None</td>
                </tr>
            </tbody>
        </table>
		)
};

export default RulesTable;
