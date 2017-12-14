// Importing the necessary packages.
import React, { Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from '../common/SideBar';
import { addBook } from '../apiCalls/Books';
import { changePassword } from '../apiCalls/changePassword';

class Profile extends Component {

/**
 * constructor
 *
 * @param {object} props
 * @since  1.0 
 */
constructor(props) {
	super(props);
	this.state = {
		oldPassword: '',
		newPassword: '',
		confirmPassword: '',
		response: '',
	};

	// Binding functions to instances
	this.handleSubmission = this.handleSubmission.bind(this);
    this.handleChange = this.handleChange.bind(this);
}


/**
 * handle submit form event
 *
 * @param {SytheticEvent} event
 * @since  1.0
 */
handleSubmission = event => {
	event.preventDefault();
	this.setState({response:''});
	console.log(this.state);
	if (this.state.newPassword == this.state.confirmPassword) {
		changePassword(this.state)
		.then((resp) => {
			console.log(resp);
			let data = resp.data;
			if (data.success == false ) this.setState({ response: 'Wrong Password'});
				else {
					this.setState(
						{ response: 'Password Updated',
						  oldPassword: '',
						  newPassword: '',
						  confirmPassword: '',
					});
					document.getElementById('oldPassword').value = '';
					document.getElementById('newPassword').value = '';
					document.getElementById('confirmPassword').value = '';
				}
		})
		.catch((err)=>console.log(err));
	} else {
		this.setState({ response: 'Passwords do not match'});
	}
}



/**
 * handle change event at input form
 *
 * @param {SytheticEvent} event
 * @since  1.0
 */
handleChange(event) {
    event.preventDefault();
    const formField = event.target.name;
    const book = { ...this.state };
    book[formField] = event.target.value.trim();
    this.setState(() => book);
}

/**
 * Render.
 *
 * @return {ReactElement} markup
 * @since  1.0
 */	
render() {
return (
      <div>
		<Header userLoggedIn="true" />
		<div class="wrapper">
    		<div class="container">
            	<div class="row">
					<div class="span9">
						<div class="module span6 offset3">
							<form class="form-vertical" onSubmit={ this.handleSubmission }>
								<div class="module-head">
									<h3>Change Password Form</h3>
								</div>
								<div class="module-body">
									<div class="control-group">
										<div class="controls row-fluid">
											<label class="control-label">Old Password</label>
											<input class="span12" type="password" name="oldPassword" id="oldPassword" onChange={this.handleChange} placeholder="Old Password"  required/>
											<span>
				                				{this.state.errors &&
				                				this.state.errors.publication}
				              				</span>
										</div>
									</div>
									<div class="control-group">
										<div class="controls row-fluid">
											<label class="control-label">New Password</label>
											<input class="span12" type="password" name="newPassword" id="newPassword" onChange={this.handleChange} placeholder="New Password"  required/>
											<span>
				                				{this.state.errors &&
				                				this.state.errors.publication}
				              				</span>
										</div>
									</div>
									<div class="control-group">
										<div class="controls row-fluid">
											<label class="control-label">Confirm Password</label>
											<input class="span12" type="password" name="confirmPassword" id="confirmPassword" onChange={this.handleChange} placeholder="Confirm Password"  required/>
											<span>
				                				{this.state.errors &&
				                				this.state.errors.publicationYear}
				              				</span>
										</div>
									</div>
								</div>
								<div class="module-foot">
									<div class="control-group">
										<div class="controls clearfix">
											<button name="submit" type="submit" class="btn btn-primary pull-right">Update</button>
										</div>
									</div>
								</div>
							</form>
							{ this.state.response ? <div class="alert alert-info"> {this.state.response} </div> : null }
						</div>
					</div>
          		</div>
            </div>
        </div>
        <Footer />
      </div>
);
}
}

export default Profile;
