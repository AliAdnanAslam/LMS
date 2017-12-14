import React, {Component} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { Redirect } from 'react-router-dom';
import { forgetPassword } from '../apiCalls/forgetPassword';
import isAuthorized from '../../utils/validation/isAuthorized';



class ForgetPassword extends Component {

/**
 * constructor
 *
 * @param {object} props
 * @since  1.0 
 */
constructor(props) {
	super(props);
    let isAuthenticated = isAuthorized();
	this.state = {
		email: '',
		response: '',
        isAuthenticated: isAuthenticated,
	};
	this.handleSubmit = this.handleSubmit.bind(this);
	this.handleChange = this.handleChange.bind(this);
}

/**
 * handle submit form event
 *
 * @param {SytheticEvent} event
 * @since  1.0
 */
handleSubmit = event => {
	event.preventDefault();
	this.setState({response:''});
	console.log(this.state);
	forgetPassword(this.state)
	.then((resp) => {
		console.log(resp);
		if(resp.data.success == false){
			console.log("im in !200 status");
			this.setState({
				email: '',
				response: 'This email does not exists'
			})
		} else if (resp.status == 200) {
			console.log("im in");
			this.setState({
				email: '',
				response: 'Submitted'
			})
		}
	})
	.catch((err)=>console.log(err));
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
    const user = { ...this.state };
    user[formField] = event.target.value.trim();
    this.setState(() => user);
}


/**
 * Render.
 *
 * @return {ReactElement} markup
 * @since  1.0
 */	
render() {
	let bool = true;
	return (
		<div>
		{this.state.isAuthenticated ? <Redirect to='/' />  :
		<div>
		<Header forgetPassword={bool} />
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
										<input class="span12" type="text" name="email" onChange={this.handleChange} placeholder="Email" required />
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
	}
	</div>
	);
}
}

export default ForgetPassword;
