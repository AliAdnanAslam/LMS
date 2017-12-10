// Importing the necessary packages.
import React, {Component} from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import './FrontPage.css';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import isAuthorized from '../utils/validation/isAuthorized';


class FrontPage extends Component {

constructor(props) {
    super(props);
    this.state = {
        query: "",
        redirect: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
}

handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.query !== ""){
        this.setState({
            redirect:true,
        })
    }
}

handleChange(event) {
    event.preventDefault();
    const formField = event.target.name;
    const search = { ...this.state };
    search[formField] = event.target.value.trim();
    this.setState(() => search);
}

render() {
	if (this.state.redirect) {
        let expr = `/search/${this.state.query}`;
    return (
            <Redirect to= {expr} />
        );
    } else {
        return (
        <div>
            <Header />
                <div className="bgImg">
                    <h1 class="text">Welcome to Hello Books</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="searchBox">
                            <div class="search-bar clearfix">
                                <input class="form-control" type="text" name="query" onChange={this.handleChange} placeholder="Search"/>
                                <input class="btn btn-primary" type="submit" value="Search"/>
                            </div>
                        </div>
                    </form>
                </div>

        </div>
        );
    }
}
}


FrontPage.propTypes = {
  isLoggedIn: PropTypes.bool,
};

const mapStateToProps = ({ authReducer }) => ({
  isLoggedIn: authReducer.isLoggedIn,
});

export default connect(mapStateToProps)(FrontPage);
