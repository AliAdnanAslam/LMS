import React, {Component} from 'react';
import Header from '../user/Header';
import Footer from '../user/Footer';
class Login extends Component {
    /**
     *
     */	
	render() {
		return (
			<div>
			<Header login="true" />
			<div class="wrapper">
				<div class="container">
					<div class="row">
						<div class="module module-login span4 offset4">
							<form class="form-vertical">
								<div class="module-head">
									<h3>Log In</h3>
								</div>
								<div class="module-body">
									<div class="control-group">
										<div class="controls row-fluid">
											<input class="span12" type="text" id="inputEmail" placeholder="Username" required />
										</div>
									</div>
									<div class="control-group">
										<div class="controls row-fluid">
											<input class="span12" type="password" id="inputPassword" placeholder="Password" required />
										</div>
									</div>
								</div>
								<div class="module-foot">
									<div class="control-group">
										<div class="controls clearfix">
											<button type="submit" class="btn btn-primary pull-right">Login</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
					<br /><br /><br />
				</div>
			</div>
			<Footer />
			</div>
		);
	}
}

export default Login;