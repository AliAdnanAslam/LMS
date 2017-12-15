// Importing the necessary packages.
import React, { Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from './SideBar';
import { addBook } from '../apiCalls/Books';
import { userProfileById } from '../apiCalls/userProfileById';
import { updateUserProfile } from '../apiCalls/updateUserProfile';

/**
 * ModifyUser component for admin to modify books.
 *
 * @class ModifyUser
 * @extends {Component}
 * @since  1.0
 */
class ModifyUser extends Component {

/**
 * constructor
 * @param {object} props
 * @since 1.0
 */
constructor(props) {
    super(props);
    this.state = {
        id: this.props.match.params.userId,
        name: '',
        fatherName: '',
        image: '',
        response: '',
        registrationNo: '',

    };

    // Binding functions to instances
    this.handleSubmission = this.handleSubmission.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.imageUplaod = this.imageUplaod.bind(this);
    this.getBase64 = this.getBase64.bind(this);

}

/**
 * componentDidMount provides lifecycle methods called after component mounts the DOM
 *
 * @since  1.0
 */
componentDidMount(){
    userProfileById(this.state)
    .then(resp => {
        console.log(resp);
        let data = resp.data;
        this.setState({
            name: data.name,
            fatherName: data.fatherName,
            registrationNo: data.registrationNo,
            email: data.email,
            image: data.image,
        });
        document.getElementById('name').value = this.state.name;
        document.getElementById('fatherName').value = this.state.fatherName;
        document.getElementById('registrationNo').value = this.state.registrationNo;
        document.getElementById('email').value = this.state.email;

    })
    .catch((err)=>console.log(err));
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
    updateUserProfile(this.state)
    .then((resp) => {
        console.log(resp);
        let data = resp.data;
        this.setState({
            response: 'Updated'
        })
    })
    .catch((err)=>console.log(err));
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
    const book = { ...this.state };
    book[formField] = event.target.value.trim();
    this.setState(() => book);
}

/**
 * Uplaod image from local storage and save to monogoose in base64
 *
 * @param {SytheticEvent} e
 * @since  1.0
 */
imageUplaod(e) {
    const file = e.target.files[0];
    this.getBase64(file).then(base64 => {
        this.setState({ image: base64 });
    });
}

/**
 * Getting the promise of image conversion
 *
 * @param {string} file image to base64
 * @since  1.0
 */
getBase64(file) {
  return new Promise((resolve,reject) => {
     const reader = new FileReader();
     reader.onload = () => resolve(reader.result);
     reader.onerror = error => reject(error);
     reader.readAsDataURL(file);
  });
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

                    <div class="span9">
                        <div class="module span6 offset3">
                            <form class="form-vertical" onSubmit={ this.handleSubmission }>
                                <div class="module-head">
                                    <h3>Please Enter Your Information</h3>
                                </div>
                                <div class="module-body">
                                    <div class="control-group">
                                        <div class="controls row-fluid">
                                            <label class="control-label">Name</label>
                                            <input class="span12" type="text" id="name" name="name" onChange={this.handleChange} placeholder="Name" />
                                            <span>
                                                {this.state.errors &&
                                                this.state.errors.name}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="controls row-fluid">
                                            <label class="control-label">Father Name</label>
                                            <input class="span12" type="text" id="fatherName" name="fatherName" onChange={this.handleChange} placeholder="Father Name" />
                                            <span>
                                                {this.state.errors &&
                                                this.state.errors.authorName}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="controls row-fluid">
                                            <label class="control-label">Registrtaion Number</label>
                                            <input class="span12" type="text" id="registrationNo" name="registrationNo" onChange={this.handleChange} placeholder="Registrtaion Number" disabled />
                                            <span>
                                                {this.state.errors &&
                                                this.state.errors.edition}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="controls row-fluid">
                                            <label class="control-label">Email</label>
                                            <input class="span12" type="text" id="email" name="email" onChange={this.handleChange} placeholder="Email" disabled />
                                            <span>
                                                {this.state.errors &&
                                                this.state.errors.edition}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div style={{marginLeft: '20px'}}>
                                    <label class="control-label">Select Image From Your Computer</label>
                                    <input type="file" class="file" name="image" onChange={ this.imageUplaod } accept="image/*" />
                                    <br /><br />
                                </div>
                                <div class="module-foot">
                                    <div class="control-group">
                                        <div class="controls clearfix">
                                            <button name="submit" type="submit" onClick={this.handleSubmission} class="btn btn-primary pull-right">Update</button>
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

export default ModifyUser;
