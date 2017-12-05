import React, {Component} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
class SignUp extends Component {

    /**
     *
     */	
	render() {
		return (
			<div>
				<Header signup="true" />
				<div class="wrapper">
					<div class="container">
						<div class="row">
							<div class="module module-login span4 offset4">
								<form class="form-vertical">
									<div class="module-head">
										<h3>Sign Up</h3>
									</div>
									<div class="module-body">
										<div class="control-group">
											<div class="controls row-fluid">
												<input class="span12" type="text" id="name" placeholder="Name" required />
											</div>
										</div>
										<div class="control-group">
											<div class="controls row-fluid">
												<input class="span12" type="text" id="fatherName" placeholder="Father Name" required />
											</div>
										</div>	
										<div class="control-group">
											<div class="controls row-fluid">
												<input class="span12" type="text" id="userID" placeholder="User ID" required />
											</div>
										</div>																										
										<div class="control-group">
											<div class="controls row-fluid">
												<input class="span12" type="text" id="inputEmail" placeholder="Email" required />
											</div>
										</div>
										<div class="control-group">
											<div class="controls row-fluid">
												<input class="span12" type="password" id="inputPassword1" placeholder="Password" required />
											</div>
										</div>
										<div class="control-group">
											<div class="controls row-fluid">
												<input class="span12" type="password" id="inputPassword2" placeholder="Confirm Password" required />
											</div>
										</div>		

									    <div class="control-group">
									            <select class="controls row-fluid" name="type" required>
									                <option value="" disabled selected>Type</option>
									                <option value="s">Student</option>
									                <option value="f">Faculty</option>
									            </select>
									    </div>																										
									</div>
									<div class="module-foot">
										<div class="control-group">
											<div class="controls clearfix">
												<button type="submit" class="btn btn-primary pull-right">Submit</button>
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

export default SignUp;