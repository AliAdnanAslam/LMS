// Importing the necessary packages.
import React, { Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from './SideBar';
import { addFine } from '../apiCalls/addFine';

/**
 * AddFine component to fine the user on late submission.
 *
 * @class AddFine
 * @extends {Component}
 * @since  1.0
 */
class AddFine extends Component {

/**
 * constructor
 * @param {object} props
 */
constructor(props) {
    super(props);
    this.state = {
        registrationNo: '',
        amount: '',
        reason: '',
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

    const regNoRegex = /^[0-9]{4}\-[A-Za-z]{2}\-[0-9]+$/;
    if (!regNoRegex.test(this.state.registrationNo.trim())) {
        this.setState({response: "invalid registrationNo"})
    } else {
        addFine(this.state)
        .then((resp) => {
            console.log(resp);
            if(resp.status == 200){
                console.log("im in");
                this.setState({
                    registrationNo: '',
                    amount: '',
                    reason: '',
                    response: 'Fine Added'
                })
            }
        })
        .catch((err)=>console.log(err));
    }


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
                            <form class="form-vertical" onSubmit={ this.handleSubmission }>
                                <div class="module-head">
                                    <h3>Enter Information</h3>
                                </div>
                                <div class="module-body">
                                    <div class="control-group">
                                        <div class="controls row-fluid">
                                            <label class="control-label">Registration No</label>
                                            <input class="span12" type="text" name="registrationNo" onChange={this.handleChange} placeholder="Registration No" required />
                                            <span>
                                                {this.state.errors &&
                                                this.state.errors.name}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="controls row-fluid">
                                            <label class="control-label">Amount</label>
                                            <input class="span12" type="number" name="amount" onChange={this.handleChange} placeholder="Amount" required />
                                            <span>
                                                {this.state.errors &&
                                                this.state.errors.edition}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <label class="control-label">Reason</label>
                                        <div class="controls">
                                            <textarea rows="5" name="reason" onChange={this.handleChange} style={{width:'530px'}}></textarea>
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
