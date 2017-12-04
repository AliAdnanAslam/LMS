// Importing the necessary packages.
import React, {Component} from 'react';
import Header from './user/Header';
import Footer from './user/Footer';
import './FrontPage.css';
import BGImage from '../header.jpg'


    let cssStyle = {


    }
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
