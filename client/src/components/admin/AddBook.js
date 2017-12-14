// Importing the necessary packages.
import React, { Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from './SideBar';
import { addBook } from '../apiCalls/Books';

/**
 *
 */
class AddBook extends Component {

// Calling constructor
constructor(props) {
    super(props);
    this.state = {
        name: '',
        authorName: '',
        edition: '',
        publication: '',
        publicationYear: '',
        image: '',
        response: '',

    };

    // Binding functions to instances
    this.handleDonation = this.handleDonation.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.imageUplaod = this.imageUplaod.bind(this);
    this.getBase64 = this.getBase64.bind(this);

}

// Function call onSubmit
handleDonation = event => {
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
                authorName: '',
                edition: '',
                publication: '',
                publicationYear: '',
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
                            <form class="form-vertical" onSubmit={ this.handleDonation }>
                                <div class="module-head">
                                    <h3>Please Enter the Book Information</h3>
                                </div>
                                <div class="module-body">
                                    <div class="control-group">
                                        <div class="controls row-fluid">
                                            <label class="control-label">Name</label>
                                            <input class="span12" type="text" name="name" onChange={this.handleChange} placeholder="Book Name" required />
                                            <span>
                                                {this.state.errors &&
                                                this.state.errors.name}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="controls row-fluid">
                                            <label class="control-label">Author Name</label>
                                            <input class="span12" type="text" name="authorName" onChange={this.handleChange} placeholder="Author Name" required />
                                            <span>
                                                {this.state.errors &&
                                                this.state.errors.authorName}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="controls row-fluid">
                                            <label class="control-label">Edition</label>
                                            <input class="span12" type="text" name="edition" onChange={this.handleChange} placeholder="Edition" required />
                                            <span>
                                                {this.state.errors &&
                                                this.state.errors.edition}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="controls row-fluid">
                                            <label class="control-label">Publication</label>
                                            <input class="span12" type="text" name="publication" onChange={this.handleChange} placeholder="Publication"  />
                                            <span>
                                                {this.state.errors &&
                                                this.state.errors.publication}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="controls row-fluid">
                                            <label class="control-label">Publication Year</label>
                                            <input class="span12" type="text" name="publicationYear" onChange={this.handleChange} placeholder="Publication Year"  />
                                            <span>
                                                {this.state.errors &&
                                                this.state.errors.publicationYear}
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
                                            <button name="submit" type="submit" class="btn btn-primary pull-right">Add</button>
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

export default AddBook;
