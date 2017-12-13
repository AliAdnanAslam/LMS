// Importing the necessary packages.
import React, { Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from '../common/SideBar';
import { addBook } from '../apiCalls/Books';

/**
 *
 */
class AddUser extends Component {

// Calling constructor
constructor(props) {
    super(props);
    this.state = {
        name: '',
        fatherName: '',
        password: '',
        confirmPassword: '',
        image: '',
        response: '',

    };

    // Binding functions to instances
    this.handleSubmission = this.handleSubmission.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.imageUplaod = this.imageUplaod.bind(this);
    this.getBase64 = this.getBase64.bind(this);

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
                name: '',
                fatherName: '',
                password: '',
                confirmPassword: '',
                image: '',
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

// Uplaod image from local storage and save to monogoose in base64
imageUplaod(e) {
    const file = e.target.files[0];
    this.getBase64(file).then(base64 => {
        this.setState({ image: base64 });
    });
}

// Getting the promise of image conversion
getBase64(file) {
  return new Promise((resolve,reject) => {
     const reader = new FileReader();
     reader.onload = () => resolve(reader.result);
     reader.onerror = error => reject(error);
     reader.readAsDataURL(file);
  });
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
                                    <h3>Enter User Information</h3>
                                </div>
                                <div class="module-body">
                                    <div class="control-group">
                                        <div class="controls row-fluid">
                                            <input class="span12" type="text" name="name" onChange={this.handleChange} placeholder="User Name" required />
                                            <span>
                                                {this.state.errors &&
                                                this.state.errors.name}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="controls row-fluid">
                                            <input class="span12" type="text" name="fatherName" onChange={this.handleChange} placeholder="Father Name" required />
                                            <span>
                                                {this.state.errors &&
                                                this.state.errors.authorName}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="controls row-fluid">
                                            <input class="span12" type="text" name="registrationNo" onChange={this.handleChange} placeholder="Registrtaion Number" required />
                                            <span>
                                                {this.state.errors &&
                                                this.state.errors.edition}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="controls row-fluid">
                                            <input class="span12" type="text" name="email" onChange={this.handleChange} placeholder="Email" required />
                                            <span>
                                                {this.state.errors &&
                                                this.state.errors.edition}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="controls row-fluid">
                                            <input class="span12" type="password" name="password" onChange={this.handleChange} placeholder="Password"  required/>
                                            <span>
                                                {this.state.errors &&
                                                this.state.errors.publication}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="controls row-fluid">
                                            <input class="span12" type="password" name="confirmPassword" onChange={this.handleChange} placeholder="Confirm Password"  required/>
                                            <span>
                                                {this.state.errors &&
                                                this.state.errors.publicationYear}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div style={{marginLeft: '20px'}}>
                                    <label class="control-label"><b>Select Image From Your Computer</b></label>
                                    <input type="file" class="file" name="image" onChange={ this.imageUplaod } accept="image/*" />
                                    <br /><br />
                                </div>
                                <div class="module-foot">
                                    <div class="control-group">
                                        <div class="controls clearfix">
                                            <button name="submit" type="submit" class="btn btn-primary pull-right">Submit</button>
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
