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


    render() {
		if (isAuthorized()) {
        return (
            <Redirect to='/user' />
            );
        } else {
            return (
            <div>
                <Header />
                    <div className="bgImg">
                        <h1 class="text">Welcome to Hello Books</h1>
                        <div className="searchBox">
                            <div class="search-bar clearfix">
                                <input class="form-control" type="text" name="" placeholder="Search"/>
                                <input class="btn btn-primary" type="submit" name="" value="Search"/>
                            </div>
                        </div>
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
