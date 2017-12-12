import React, {Component} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { resetPassword } from '../apiCalls/resetPassword';



class ResetPassword extends Component {

constructor(props) {
	super(props);
	this.state = {
		password: '',
		confirmPassword: '',
		token: this.props.match.params.token,
		response: ''
	};
	this.handleSubmit = this.handleSubmit.bind(this);
	this.handleChange = this.handleChange.bind(this);
}

// Function call onSubmit
handleSubmit = event => {
	event.preventDefault();
	this.setState({response:''});
	console.log(this.state);

	if(this.state.password) {
		if (this.state.password === this.state.confirmPassword) {
			resetPassword(this.state)
			.then((resp) => {
				console.log(resp);
				if(resp.data.success == false){
					this.setState({
						response: 'Token Expired',
					})
				} else if (resp.data.success == true) {
					this.setState({
						response: 'Password Updated',
					})
				}
			})
			.catch((err)=>console.log(err));

		} else {
			this.setState({response: "Password does not match."});
		}
	} else {
		this.setState({response: "Enter a password"});
	}

}

// Tracking the input change state
handleChange(event) {
    event.preventDefault();
    const formField = event.target.name;
    const user = { ...this.state };
    user[formField] = event.target.value.trim();
    this.setState(() => user);
}



render() {
	let bool = true;
	return (
		<div>
		<Header resetPassword = {bool}  />
		<div class="wrapper">
			<div class="container">
				<div class="row">
					<div class="module module-login span4 offset4">
						<form class="form-vertical" onSubmit={ this.handleSubmit }>
							<div class="module-head">
								<h3>Please enter your email</h3>
							</div>
							<div class="module-body">
								<div class="control-group">
									<div class="controls row-fluid">
										<input class="span12" type="text" name="password" onChange={this.handleChange} placeholder="New Password" required />
										<input class="span12" type="text" name="confirmPassword" onChange={this.handleChange} placeholder="Confirm Password" required />
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
						{ this.state.response ? <div class="alert alert-info"> {this.state.response} </div> : null }

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

export default ResetPassword;
