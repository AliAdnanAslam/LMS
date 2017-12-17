// Importing the necessary packages.
import React, {Component} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from './SideBar';
import { receiveFine } from '../apiCalls/receiveFine';



class IssueItem extends Component {

constructor(props) {
	super(props);
	this.fine = this.props.fine;
	this.state = {
		accepted : false,
		fineId: this.fine._id,
	}
	this.handleAccept = this.handleAccept.bind(this);
}


handleAccept = (event) => {
	receiveFine(this.state)
	.then( resp => {
		this.setState({accepted: true})
	} )
	.catch(err => console.log(err))
}


  render() {
    return (
    		<tr>
		        <td>{this.fine.registrationNo}</td>
		        <td>{this.fine.amount}</td>
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

export default IssueItem;
