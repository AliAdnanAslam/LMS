import React, {Component} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

class ForgetPassword extends Component {
    /**
     *
     */
	render() {
		return (
			<div>
			<Header forgetPassword="true" />
			<div class="wrapper">
				<div class="container">
					<div class="row">
						<div class="module module-login span4 offset4">
							<form class="form-vertical">
								<div class="module-head">
									<h3>Please enter your email</h3>
								</div>
								<div class="module-body">
									<div class="control-group">
										<div class="controls row-fluid">
											<input class="span12" type="text" id="inputEmail" placeholder="Email" required />
										</div>
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

export default ForgetPassword;
