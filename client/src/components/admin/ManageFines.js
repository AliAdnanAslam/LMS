// Importing the necessary packages.
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from './SideBar';
import { getAllFines } from '../apiCalls/getAllFines';
import FineItem from './FineItem';


/**
 * ManageFines component for admin to add or modify fines.
 *
 * @class ManageFines
 * @extends {Component}
 * @since  1.0
 */
class ManageFines extends Component {

constructor(props) {
	super(props);
	this.state = {
		allFines: [],
		pendingFines: [],
		exists: false,
	}
}


componentDidMount(){
   getAllFines({})
    .then(resp => {
        this.setState( {allFines: resp.data} );
        let fines = this.state.allFines;
        console.log("fine here", fines);
        let pendingFines = fines.filter ( fine => fine.status == 'pending' );
        console.log("pending fines here", pendingFines);
        if(pendingFines.length != 0) {
        	this.setState( {pendingFines: pendingFines, exists: true });
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
						<div class="jumbotron well">
							<div>
								<br />
								<Link to='/admin/addfine'>
								<button type="button" class="btn btn-primary pull-left">Add Fine</button>
								</Link>
							</div>
							<br />
							<table class="table table-striped">
							    <thead>
							      <tr>
							        <th>Registration Number</th>
							        <th>Fine</th>
							        <th>Accept Fines</th>
							      </tr>
							    </thead>
							    <tbody>
							      { this.state.exists ?
							      	this.state.pendingFines.map (fine => <FineItem fine={fine}/>)
							 		: <div> No Fine Pending!! </div>
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

export default ManageFines;
