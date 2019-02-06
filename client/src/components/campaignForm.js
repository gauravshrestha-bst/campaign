import React from 'react';

const AddCampaign=()=>{
	return(
        
		<form class="ui form">
			<div class="field">
				<label>Rule Name</label>
				<input type="text" name="campaign-name" placeholder="First Name"/>
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
				<div class="ui checkbox">
				<input type="checkbox" tabindex="0" class="hidden"/>
				<label>eCPM </label>
				</div>
			</div>
            <div class="field">
				<label>Action</label>
				<select>
                    <option>Notify</option>
                    
                </select>	
            </div>
            <div class="field">
				<div class="ui radiobutton">
				<input type="radiobutton" class="hidden"/>
				<label>Activated</label>
                <input type="radiobutton"  class="hidden"/>
				<label>Deactivated</label>
				</div>
            </div>
			<button class="ui button" type="submit">Submit</button>
		</form>
       
		)
};

export default AddCampaign;