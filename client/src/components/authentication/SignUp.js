import React, {Component} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { validateSignUp } from '../../utils/validation/auth';
import { addUser } from '../apiCalls/addUser';
import { login } from '../apiCalls/login';
import isAuthorized from '../../utils/validation/isAuthorized';
import { Redirect } from 'react-router-dom';


class SignUp extends Component {


constructor(props) {
    super(props);
    let isAuthenticated = isAuthorized();
    this.state = {
      name: '',
      fatherName: '',
      registrationNo: '',
      password: '',
      email: '',
      type: '',
      confirmPassword: '',
      response: '',
      redirect: false,
      isAuthenticated: isAuthenticated,
    };
    this.defaultState = {
	  name: '',
      fatherName: '',
      registrationNo: '',
      password: '',
      email: '',
      type: '',
      confirmPassword: '',
      response: '',
      redirect: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

handleChange(event) {
    event.preventDefault();
    const formField = event.target.name;
    const user = { ...this.state };
    user[formField] = event.target.value.trim();
    this.setState(() => user);
}

handleSubmit = event => {
	event.preventDefault();
	this.setState({ response: "" });
	const { errors, isValid } = validateSignUp(this.state);
	if (!isValid) {
	  return this.setState({ response: errors });
	} else {
		addUser(this.state)
		.then((resp) => {
			if(resp.data.success == false){
				console.log("im in !200 status");
				document.getElementById("signup-form").reset();
				this.setState({
					response: 'This email already exists'
				});
				console.log(this.state);
			} else if (resp.status == 200) {
				console.log("im in");
				login(this.state)
				.then((resp) => {
					 const token = resp.data.token;
	    			 localStorage.setItem('token', token);
	 				 this.setState({
						...this.defaultState,
						response: 'Successfully Signed Up',
						redirect: true,
					 })
				})
				.catch((err)=>console.log(err));
			}
		})
		.catch((err)=>console.log(err));
	}
}

render() {
	let bool = true;
	return (
		<div>
		{this.state.isAuthenticated ? <Redirect to='/' />  :
		<div>
			<Header signup={bool} />
			<div class="wrapper">
				<div class="container">
					<div class="row">
						<div class="module module-login span4 offset4">
							<form class="form-vertical" id="signup-form" onSubmit={this.handleSubmit}>
								<div class="module-head">
									<h3>Sign Up</h3>
								</div>
								<div class="module-body">
									<div class="control-group">
										<div class="controls row-fluid">
											<input class="span12" type="text" name="name" onChange={this.handleChange} placeholder="Name" required />
										</div>
									</div>
									<div class="control-group">
										<div class="controls row-fluid">
											<input class="span12" type="text" name="fatherName" onChange={this.handleChange} placeholder="Father Name" required />
										</div>
									</div>
									<div class="control-group">
										<div class="controls row-fluid">
											<input class="span12" type="text" name="registrationNo" onChange={this.handleChange} placeholder="Registration Number" required />
										</div>
									</div>
									<div class="control-group">
										<div class="controls row-fluid">
											<input class="span12" type="text" name="email" onChange={this.handleChange} placeholder="Email" required />
										</div>
									</div>
									<div class="control-group">
										<div class="controls row-fluid">
											<input class="span12" type="password" name="password" onChange={this.handleChange} placeholder="Password" required />
										</div>
									</div>
									<div class="control-group">
										<div class="controls row-fluid">
											<input class="span12" type="password" name="confirmPassword" onChange={this.handleChange} placeholder="Confirm Password" required />
										</div>
									</div>

								    <div class="control-group">
								            <select class="controls row-fluid" onChange={this.handleChange} name="type" required>
								                <option value="" disabled selected>Type</option>
								                <option value="student">Student</option>
								                <option value="faculty">Faculty</option>
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
							{ this.state.response ? <div class="alert alert-info"> {this.state.response} </div> : null }
						</div>
					</div>
					<br /><br /><br />
				</div>
			</div>
			<Footer />
		</div>
	}
		</div>
	);
}
}

export default SignUp;
