// Importing the necessary packages.
import React, { Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from '../common/SideBar';
import { addBook } from '../apiCalls/Books';
import { getProfile } from '../apiCalls/getProfile';

class Profile extends Component {

// Calling constructor
constructor(props) {
	super(props);
	this.state = {
		previousPassword: '',
		newPassword: '',
		confirmPassword: '',
		response: '',

	};

	// Binding functions to instances
	this.handleSubmission = this.handleSubmission.bind(this);
    this.handleChange = this.handleChange.bind(this);
}

componentDidMount(){
	getProfile({})
	.then(resp => {
		console.log(resp);
		let data = resp.data;
		this.setState({
			name: data.name,
			fatherName: data.fatherName,
			registrationNo: data.registrationNo,
			email: data.email,
		});
		document.getElementById('name').value = this.state.name;
		document.getElementById('fatherName').value = this.state.fatherName;
		document.getElementById('registrationNo').value = this.state.registrationNo;
		document.getElementById('email').value = this.state.email;

	})
	.catch((err)=>console.log(err));
}

// Function call onSubmit
handleSubmission = event => {
	event.preventDefault();
	this.setState({response:''});
	console.log(this.state);
	addBook(this.state)
	.then((resp) => {
		console.log(resp);
		if(resp.status == 200){
			console.log("im in");
			this.setState({
				previousPassword: '',
				newPassword: '',
				confirmPassword: '',
				response: 'Submitted'
			})
		}
	})
	.catch((err)=>console.log(err));
}



// Tracking the input change state
handleChange(event) {
    event.preventDefault();
    const formField = event.target.name;
    const book = { ...this.state };
    book[formField] = event.target.value.trim();
    this.setState(() => book);
}

//
render() {
return (
      <div>
		<Header userLoggedIn="true" />
		<div class="wrapper">
    		<div class="container">
            	<div class="row">
            		<SideBar />
					<div class="span9">
						<div class="module span6 offset1">
							<form class="form-vertical" onSubmit={ this.handleSubmission }>
								<div class="module-head">
									<h3>Change Password Form</h3>
								</div>
								<div class="module-body">									
									<div class="control-group">
										<div class="controls row-fluid">
											<label class="control-label">Previous Password</label>
											<input class="span12" type="password" name="PreviousPassword" onChange={this.handleChange} placeholder="Old Password"  required/>
											<span>
				                				{this.state.errors &&
				                				this.state.errors.publication}
				              				</span>
										</div>
									</div>									
									<div class="control-group">
										<div class="controls row-fluid">
											<label class="control-label">New Password</label>
											<input class="span12" type="password" name="newPassword" onChange={this.handleChange} placeholder="New Password"  required/>
											<span>
				                				{this.state.errors &&
				                				this.state.errors.publication}
				              				</span>
										</div>
									</div>
									<div class="control-group">
										<div class="controls row-fluid">
											<label class="control-label">Confirm Password</label>
											<input class="span12" type="password" name="confirmPassword" onChange={this.handleChange} placeholder="Confirm Password"  required/>
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
