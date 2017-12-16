// Importing the necessary packages.
import React, {Component} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from './SideBar';
import { issueBook } from '../apiCalls/issueBook';



class ReserveItem extends Component {

constructor(props) {
	super(props);
	this.book = this.props.book;
	this.state = {
		accepted : false,
		bookId: this.book._id
	}
	this.handleAccept = this.handleAccept.bind(this);
}


componentDidMount() {

}

handleAccept = (event) => {
	issueBook(this.state)
	.then( resp => {
		this.setState({accepted: true})
	} )
	.catch(err => console.log(err))
}


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
