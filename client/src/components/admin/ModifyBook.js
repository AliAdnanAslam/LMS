// Importing the necessary packages.
import React, {Component} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from './SideBar';
import { bookById } from '../apiCalls/bookById';
import { updateBook } from '../apiCalls/updateBook';


class ModifyBook extends Component {

// Calling constructor
constructor(props) {
    super(props);
    this.state = {
        id: this.props.match.params.bookId,
        name: '',
        authorName: '',
        image: '',
        response: '',
        edition: '',
        publication:'',
        publicationYear:'',

    };

    // Binding functions to instances
    this.handleSubmission = this.handleSubmission.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.imageUplaod = this.imageUplaod.bind(this);
    this.getBase64 = this.getBase64.bind(this);

}

componentDidMount(){
    bookById(this.state)
    .then(resp => {
        let data = resp.data;
        this.setState({
            name: data.name,
            authorName: data.authorName,
            image: data.image,
            edition: data.edition,
            publication: data.publication,
            publicationYear: data.publicationYear,
        });
        document.getElementById('name').value = this.state.name;
        document.getElementById('authorName').value = this.state.authorName;
        document.getElementById('edition').value = this.state.edition;
        document.getElementById('publication').value = this.state.publication;
        document.getElementById('publicationYear').value = this.state.publicationYear;


    })
    .catch((err)=>console.log(err));
}

// Function call onSubmit
handleSubmission = event => {
    event.preventDefault();
    this.setState({response:''});
    console.log(this.state);
    updateBook(this.state)
    .then((resp) => {
        console.log(resp);
        let data = resp.data;
        this.setState({
            response: 'Updated'
        })
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
                                <form class="form-vertical">
                                    <div class="module-head">
                                        <h3>Please Enter the Book Information</h3>
                                    </div>
                                    <div class="module-body">
                                        <div class="control-group">
                                            <div class="controls row-fluid">
                                                <label class="control-label">Name</label>
                                                <input class="span12" type="text" name="name" id="name" onChange={this.handleChange} placeholder="Book Name" required />
                                            </div>
                                        </div>
                                        <div class="control-group">
                                            <div class="controls row-fluid">
                                                <label class="control-label">Author Name</label>
                                                <input class="span12" type="text" name="authorName" id="authorName" onChange={this.handleChange} placeholder="Author Name" required />
                                            </div>
                                        </div>
                                        <div class="control-group">
                                            <div class="controls row-fluid">
                                                <label class="control-label">Edition</label>
                                                <input class="span12" type="text" name="edition" id="edition" onChange={this.handleChange} placeholder="Edition" required />
                                            </div>
                                        </div>
                                        <div class="control-group">
                                            <div class="controls row-fluid">
                                                <label class="control-label">Publication</label>
                                                <input class="span12" type="text" name="publication" id="publication" onChange={this.handleChange} placeholder="Publication" required />
                                            </div>
                                        </div>
                                        <div class="control-group">
                                            <div class="controls row-fluid">
                                                <label class="control-label">Publication Year</label>
                                                <input class="span12" type="text" name="publicationYear" id="publicationYear" onChange={this.handleChange} placeholder="Publication Year" required />
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
                                                <button type="" onClick={this.handleSubmission} class="btn btn-primary pull-right">Submit</button>
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

export default ModifyBook;
