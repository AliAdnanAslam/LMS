// Importing the necessary packages.
import React, {Component} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from './SideBar';
import { donatedBooks } from '../apiCalls/donationRequests';
import { updateBookStatus } from '../apiCalls/updateBookStatus';
import ReserveItem from './ReserveItem';


class BooksResRequests extends Component {

constructor(props) {
	super(props);
	this.state = {
		donatedBook: [],
		reservedBooks: [],
		exists: false,
	}
}

componentDidMount() {
	donatedBooks()
	.then(resp => {
		this.setState({donatedBook: resp.data});
		console.log(this.state.donatedBook);
        let book = this.state.donatedBook.filter( book => { return book.status == "reserved" });
        if( book.length !== 0 ) {
			this.setState({reservedBooks: book, exists: true});
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
	                                        Book Reservation Requests
	                                    </h3>
	                                </div>
	                                <div class="module-body table">
	                                    <table class="table table-message clearfix">
	                                        <tbody>
	                                            <tr class="heading">
	                                                <td>
	                                                    Reserved By
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
	                                            {this.state.exists ? this.state.reservedBooks.map(book =>
	                                            	<ReserveItem book={book} />
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

export default BooksResRequests;
