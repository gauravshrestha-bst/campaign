import React from 'react';

const AddRule=()=>{
	return(
        
		<form class="ui form">
			<div class="field">
				<label>Rule Name</label>
				<input type="text" name="rule-name" placeholder="Rule Name"/>
			</div>
			<div class="field">
				<label>Campaign</label>
				<select>
                    <option>Campaign A</option>
                    <option>Campaign B</option>
                    <option>Campaign C</option>
                    <option>Campaign D</option>
                    <option>Campaign E</option>
                </select>	
            </div>
			<div class="field">
				<label>Schedule</label>
				<input type="text" name="schedule" placeholder="15 mins"/>
			</div>
			<div class="field">
				<label>Conditions </label>
				<label>ECPM</label>
				<input type="text" name="" placeholder="min"/>
				<input type="text" name="" placeholder="max"/>
				<br></br>
				<label>ECPC</label>
				<input type="text" name="" placeholder="min"/>
				<input type="text" name="" placeholder="max"/>
				<br></br>
				<label>ECPI</label>
				<input type="text" name="" placeholder="min"/>
				<input type="text" name="" placeholder="max"/>
				<br></br>
				<label>clicks</label>
				<input type="text" name="" placeholder="min"/>
				<input type="text" name="" placeholder="max"/>
				<br></br>
				<label>Install</label>
				<input type="text" name="" placeholder="min"/>
				<input type="text" name="" placeholder="max"/>
				<br></br>
				<label>Impression</label>
				<input type="text" name="" placeholder="min"/>
				<input type="text" name="" placeholder="max"/>
				<br></br>
				<label>spends</label>
				<input type="text" name="" placeholder="min"/>
				<input type="text" name="" placeholder="max"/>
			
				
			</div>
            <div class="field">
				<label>Action</label>
				<select>
                    <option>Notify</option>       
                </select>	
            </div>
            <div class="field" name="status">
				<label>Status</label>
				<div class="ui radio">
				<input type="radio" class="hidden" value="Activate"/>Activate 
                <input type="radio"  class="hidden" value="Deactivate" />Deactivate
				</div>
            </div>
			<button class="ui button" type="submit">Submit</button>
		</form>
       
		)
};

export default AddRule;