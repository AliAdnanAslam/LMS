// Importing the necessary packages.
import React, {Component} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from './SideBar';
import { getAllOrders } from '../apiCalls/getAllOrders';
import jwt from 'jsonwebtoken';


/**
 * BookStatus component for displaying the reserved and issued books by user.
 *
 * @class BookStatus
 * @extends {Component}
 * @since  1.0
 */
class BookStatus extends Component {

constructor(props) {
		super(props);
		this.state = {
			orders: [],
			exists: false,
		}
	}

componentDidMount() {
	getAllOrders()
	.then(resp => {
			if(resp.data.length !== 0) {
				let orders = resp.data;

				let decodedId = '';
				jwt.verify(localStorage.getItem('token'), 'iReact', function(err, decoded) {
			    if (err) console.log(err)
					else decodedId = decoded.id;
				});

				console.log("im the decoded id", decodedId);
				let filteredOrders = orders.filter( order => order.userId[0]._id === decodedId && order.satatus === 'issued' )
				console.log("Im the filtered result", filteredOrders)
				if(filteredOrders.length !== 0)
				this.setState({ orders: filteredOrders, exists: true });
			}
	})
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
    <div>
  		<Header userLoggedIn="true" />
  		<div class="wrapper">
  			<div class="container">
          		<div class="row">
              		<SideBar />
					<div class="span9">
						<div class="jumbotron well">
							<div>
								<br />
								<h1 style={{textAlign: 'center'}}>Books</h1>
							</div>
							<br />
							<table class="table table-striped">
							    <thead>
							      <tr>
							      	<th>Book Name</th>
							        <th>Start Date</th>
							        <th>Due Date</th>
							        <th>Status</th>
							      </tr>
							    </thead>
							    <tbody>
							      { this.state.exists ?
							      this.state.orders.map( order =>
							      	<tr>
							      	<td>{order.bookId[0].name}</td>
							        <td>{order.issueDate}</td>
							        <td>{order.expectedReturnDate}</td>
							        <td>{order.status}</td>
							      	</tr>
							      	)
							      		: <div> No Orders :P </div>
							      }
							    </tbody>
							</table>
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

export default BookStatus;
