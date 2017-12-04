// Importing the necessary packages.
import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import './FrontPage.css';
import BGImage from '../header.jpg'

/**
 *
 */
class FrontPage extends Component {


    /**
     * rendr
     */
    render() {
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

export default FrontPage;
