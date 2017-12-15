// Importing the necessary packages.
import React, {Component} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from './SideBar';
import { updateBookStatus } from '../apiCalls/updateBookStatus';



class DonationItem extends Component {

constructor(props) {
	super(props);
	this.state = {
		accepted : false
	}
	this.book = this.props.book;
	this.handleAccept = this.handleAccept.bind(this);
}


handleAccept = (event) => {
	let id = this.book._id;
	updateBookStatus({status: 'available', id: id})
	.then( resp => {
		this.setState({accepted: true})
	} )
	.catch(err => console.log(err))
}


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
		            {this.state.accepted === false ?
		            <button type="button" onClick={this.handleAccept} class="btn btn-primary">Accept</button>
		            : <button type="button" class="btn btn-primary" disabled>Accepted</button>
		            }

		        </td>
        	</tr>

    );
  }
}

export default DonationItem;
