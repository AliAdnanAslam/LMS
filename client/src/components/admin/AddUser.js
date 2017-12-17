// Importing the necessary packages.
import React, { Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from './SideBar';
import { validateSignUp } from '../../utils/validation/auth';
import { addUser } from '../apiCalls/addUser';

/**
 * If admin wants to add a new user.
 *
 * @class AddUser
 * @extends {Component}
 * @since  1.0
 */
class AddUser extends Component {

/**
 * constructor
 *
 * @param {object} props
 * @since 1.0
 */
constructor(props) {
    super(props);
    this.state = {
      name: '',
      fatherName: '',
      registrationNo: '',
      password: '',
      email: '',
      type: '',
      confirmPassword: '',
      response: '',
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

/**
 * handle handle event at input form
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
 * handle submit form event
 *
 * @param {SytheticEvent} event
 * @since  1.0
 */
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
                this.setState({
                        ...this.defaultState,
                        response: 'Successfully User Added ',
                })
            }
        })
        .catch((err)=>console.log(err));
    }
}


/**
 * Renders components to DOM.
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
                    <SideBar />
                    <div class="span9">
                        <div class="module span6 offset1">
                            <form class="form-vertical" id="signup-form" onSubmit={ this.handleSubmission }>
                                <div class="module-head">
                                    <h3>Enter User Information</h3>
                                </div>
                                <div class="module-body">
                                    <div class="control-group">
                                        <div class="controls row-fluid">
                                            <label class="control-label">Name</label>
                                            <input class="span12" type="text" name="name" onChange={this.handleChange} placeholder="User Name" required />
                                            <span>
                                                {this.state.errors &&
                                                this.state.errors.name}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="controls row-fluid">
                                            <label class="control-label">Father Name</label>
                                            <input class="span12" type="text" name="fatherName" onChange={this.handleChange} placeholder="Father Name" required />
                                            <span>
                                                {this.state.errors &&
                                                this.state.errors.authorName}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="controls row-fluid">
                                            <label class="control-label">Registrtaion Number</label>
                                            <input class="span12" type="text" name="registrationNo" onChange={this.handleChange} placeholder="Registrtaion Number" required />
                                            <span>
                                                {this.state.errors &&
                                                this.state.errors.edition}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="controls row-fluid">
                                            <label class="control-label">Email</label>
                                            <input class="span12" type="text" name="email" onChange={this.handleChange} placeholder="Email" required />
                                            <span>
                                                {this.state.errors &&
                                                this.state.errors.edition}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="controls row-fluid">
                                            <label class="control-label">Password</label>
                                            <input class="span12" type="password" name="password" onChange={this.handleChange} placeholder="Password"  required/>
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
                                            <button name="submit" type="submit" onClick={this.handleSubmit} class="btn btn-primary pull-right">Submit</button>
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

export default AddUser;
