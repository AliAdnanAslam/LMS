import React, {Component} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from './SideBar';
import { getAllOrders } from '../apiCalls/getAllOrders';
import IssueItem from './IssueItem';

/**
 * BooksIssued component renders the issued books to books status.
 *
 * @class BooksIssued
 * @extends {Component}
 * @since  1.0
 */
class BooksIssued extends Component {

/**
 * constructor
 *
 * @param {object} props
 * @since 1.0
 */
constructor(props) {
	super(props);
	this.state = {
		donatedBook: [],
		reservedBooks: [],
		exists: false,
	}
}

/**
 * componentDidMount provides lifecycle methods called after component mounts the DOM
 *
 * @since  1.0
 */
componentDidMount() {
	getAllOrders()
	.then(resp => {
		this.setState({donatedBook: resp.data});
		console.log(resp.data);
        let book = this.state.donatedBook.filter( book => { return book.status == "issued" });
        if( book.length !== 0 ) {
			this.setState({reservedBooks: book, exists: true});
        }
	})
	.catch((err)=>console.log(err));
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
                        <div class="content">
                            <div class="module message">
                                <div class="module-head">
                                    <h3>
                                        Book Issued
                                    </h3>
                                </div>
                                <div class="module-body table">
                                    <table class="table table-message clearfix">
                                        <tbody>
                                            <tr class="heading">
                                                <td>
                                                    Issued to
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
                                                    Issue Date
                                                </td>
                                                <td>
                                                    Expect. Return Date
                                                </td>
                                                <td>
                                                    Receive Back
                                                </td>
                                            </tr>
                                            {this.state.exists ? this.state.reservedBooks.map(book =>
                                            	<IssueItem book={book} />
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

export default BooksIssued;
