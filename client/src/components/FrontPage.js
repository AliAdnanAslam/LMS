// Importing the necessary packages.
import React, {Component} from 'react';
import Header from './user/Header';
import Footer from './user/Footer';
import './FrontPage.css';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';


class FrontPage extends Component {

    returnContent(props) {
        if (this.props.isLoggedIn) {
        return (
            <Redirect to='/user' />
            );
        } else {
            return (
            <div>
                <Header />
                    <div className="bgImg">
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


    render() {
		return this.returnContent()
	}
}


FrontPage.propTypes = {
  isLoggedIn: PropTypes.bool,
};

const mapStateToProps = ({ authReducer }) => ({
  isLoggedIn: authReducer.isLoggedIn,
});

export default connect(mapStateToProps)(FrontPage);
