// Importing the necessary packages.
import React, {Component} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from '../common/SideBar';


class DonationRequests extends Component {
  render() {
    return (
		<div>
			<Header userLoggedIn="true" />
			<div class="wrapper">
				<div class="container">
					<div class="row">
						<SideBar />
	                    <div class="span9">
	                        <div class="content">
	                            <div class="module message">
	                                <div class="module-head">
	                                    <h3>
	                                        Book Donation Requests
	                                    </h3>
	                                </div>
	                                <div class="module-body table">
	                                    <table class="table table-message clearfix">
	                                        <tbody>
	                                            <tr class="heading">
	                                                <td>
	                                                    Sender
	                                                </td>
	                                                <td>
	                                                    Book Title
	                                                </td>
	                                                <td>
	                                                    Author name
	                                                </td>	                                                
	                                            </tr>
	                                            <tr class="unread">
	                                                <td>
	                                                    John Donga
	                                                </td>
	                                                <td>
	                                                    Sample Work
	                                                </td>
	                                                <td>
	                                                    John
	                                                </td>	
	                                            </tr>
	                                            <tr class="unread">
	                                                <td>
	                                                    John Donga
	                                                </td>
	                                                <td>
	                                                    Test Title
	                                                </td>
	                                                <td>
	                                                    John
	                                                </td>	
	                                            </tr>
	                                            <tr class="unread">
	                                                <td>
	                                                    Facebook
	                                                </td>
	                                                <td>
	                                                    Dongi sents you a friend request!
	                                                </td>
	                                                <td>
	                                                    John
	                                                </td>	
	                                            </tr>
	                                            <tr class="unread">
	                                                <td>
	                                                    John Donga
	                                                </td>
	                                                <td>
	                                                    Something
	                                                </td>
	                                                <td>
	                                                    John
	                                                </td>	                                                
	                                            </tr>
	                                        </tbody>
	                                    </table>
	                                </div>
	                                <div class="module-foot">
	                                </div>
	                            </div>
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

export default DonationRequests;