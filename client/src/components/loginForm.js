import React from 'react';

const LoginForm=()=>{
	return(
		<div className="container">
			<div className="row">
			<h1 >Log in </h1>
				<div>
					<form action="/login" method="post">
						<div className="form-group">
							<input className="form-control" type="text" name="username" placeholder="username" />
						</div>
						<div class="form-group">
							<input className="form-control" type="password" name="password" placeholder="password" />
						</div>
						<div classNameName="form-group">
							<input className="btn btn-primary btn-lg btn-block" type="submit" />
						</div>	
					</form>
				</div>
				
			</div>
		</div>
		)
};

export default LoginForm;