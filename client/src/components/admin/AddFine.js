// Importing the necessary packages.
import React, { Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from '../common/SideBar';
import { addBook } from '../apiCalls/Books';

/**
 *
 */
class AddFine extends Component {

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
                                    <h3>Enter Information</h3>
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
                                            <label class="control-label">Registrtaion Number</label>
                                            <input class="span12" type="text" name="registrationNo" onChange={this.handleChange} placeholder="Registrtaion Number" required />
                                            <span>
                                                {this.state.errors &&
                                                this.state.errors.edition}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <label class="control-label">Reason</label>
                                        <div class="controls">
                                            <textarea rows="5" style={{width:'530px'}}></textarea>
                                        </div>
                                    </div>                                    
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

export default AddFine;
