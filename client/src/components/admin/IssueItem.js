// Importing the necessary packages.
import React, {Component} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from './SideBar';
import { receiveBook } from '../apiCalls/receiveBook';

/**
 * IssueItem component for admin to issue a reserved book.
 *
 * @class IssueItem
 * @extends {Component}
 * @since  1.0
 */
class IssueItem extends Component {

/**
 * constructor
 *
 * @param {object} props
 * @since 1.0
 */
constructor(props) {
	super(props);
	this.book = this.props.book;
	this.state = {
		accepted : false,
		orderId: this.book._id,
	}
	this.handleAccept = this.handleAccept.bind(this);
}

/**
 * handle accept form event onClick
 *
 * @param {SytheticEvent} event
 * @since  1.0
 */
handleAccept = (event) => {
	receiveBook(this.state)
	.then( resp => {
		this.setState({accepted: true})
	} )
	.catch(err => console.log(err))
}

/**
 * Renders components to DOM.
 *
 * @return {ReactElement} markup
 * @since  1.0
 */	
render() {
return (
	<tr class="unread">
        <td>
            {this.book.userId[0].name}
        </td>
        <td>
            {this.book.bookId[0].name}
        </td>
        <td>
            {this.book.bookId[0].edition}
        </td>
        <td>
            {this.book.bookId[0].authorName}
        </td>
        <td>
            {this.book.issueDate}
        </td>
        <td>
            {this.book.expectedReturnDate}
        </td>
        <td>
            {this.state.accepted === false ?
            <button type="button" onClick={this.handleAccept} class="btn btn-primary">Receive</button>
            : <button type="button" class="btn btn-primary" disabled>Received</button>
            }

        </td>
	</tr>
);
}
}

export default IssueItem;
