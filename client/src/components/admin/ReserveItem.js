// Importing the necessary packages.
import React, {Component} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from './SideBar';
import { issueBook } from '../apiCalls/issueBook';

/**
 * ReserveItem component for user to reserve book.
 *
 * @class ReserveItem
 * @extends {Component}
 * @since  1.0
 */
class ReserveItem extends Component {

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
		bookId: this.book.bookId[0]._id,
		instanceId: this.book._id,
		reservedBy: this.book.reservedBy
	}
	this.handleAccept = this.handleAccept.bind(this);
}

/**
 * handle accept form event onClick.
 *
 * @param {SytheticEvent} event
 * @since  1.0
 */
handleAccept = (event) => {
	issueBook(this.state)
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
            {this.book.reservedBy}
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
            {this.state.accepted === false ?
            <button type="button" onClick={this.handleAccept} class="btn btn-primary">Issue</button>
            : <button type="button" class="btn btn-primary" disabled>Issued</button>
            }

        </td>
	</tr>
);
}
}

export default ReserveItem;
