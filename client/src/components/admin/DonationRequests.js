// Importing the necessary packages.
import React, {Component} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from './SideBar';
import { donatedBooks } from '../apiCalls/donationRequests';
import { updateBookStatus } from '../apiCalls/updateBookStatus';
import DonationItem from './DonationItem';

/**
 * DonationRequests component for admin to approve the user book donation request.
 *
 * @class DonationRequests
 * @extends {Component}
 * @since  1.0
 */
class DonationRequests extends Component {

constructor(props) {
	super(props);
	this.state = {
		donatedBook: [],
		pendingBooks: [],
		exists: false,
	}
}

componentDidMount() {
	donatedBooks()
	.then(resp => {
		this.setState({donatedBook: resp.data});
		console.log(this.state.donatedBook);
        let book = this.state.donatedBook.filter( book => { return book.status == "donated" });
        if( book.length !== 0 ) {
			this.setState({pendingBooks: book, exists: true});
        }
	})
	.catch((err)=>console.log(err));

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
	                                                    Edition
	                                                </td>
	                                                <td>
	                                                    Author
	                                                </td>
	                                                <td>
	                                                    Accept Request
	                                                </td>

	                                            </tr>
	                                            {this.state.exists ? this.state.pendingBooks.map(book =>
	                                            	<DonationItem book={book} />
	                                            ) : <div> No Pending Request !!</div>}
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
