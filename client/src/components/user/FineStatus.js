// Importing the necessary packages.
import React, {Component} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from './SideBar';
import { getFineById } from '../apiCalls/getFineById';

/**
 * FineStatus component for displaying the user fines.
 *
 * @class FineStatus
 * @extends {Component}
 * @since  1.0
 */
class FineStatus extends Component {

constructor(props){
	super(props);
	this.state = {
		fines: [],
		exists: false,
	}
}

componentDidMount() {
	getFineById()
	.then(resp => {
		if(resp.data.length != 0) {
			this.setState({ fines: resp.data, exists: true});
		}
	})
	.catch(err =>(console.log(err)));
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
								<h1 style={{textAlign: 'center'}}>Fines</h1>
							</div>
							<br />
							<table class="table table-striped">
							    <thead>
							      <tr>
							      	<th>Amount</th>
							        <th>Date</th>
							        <th>Reason</th>
							      </tr>
							    </thead>
							    <tbody>
							      	{ this.state.exists ?
							      		this.state.fines.map (fine =>
							      			<tr>
										        <td>{fine.amount}</td>
										        <td>{fine.fineDate}</td>
										        <td>{fine.reason}</td>
										    </tr>
							      			) :
							      		<div> no fine :P  </div>
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

export default FineStatus;
