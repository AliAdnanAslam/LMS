// Importing the necessary packages.
import React, {Component} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from '../common/SideBar';

/**
 * FineStatus component for displaying the user fines.
 *
 * @class FineStatus
 * @extends {Component}
 * @since  1.0
 */
class FineStatus extends Component {

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
							      	<th>Date</th>
							        <th>Rupees</th>
							        <th>Reason</th>
							      </tr>
							    </thead>
							    <tbody>
							      <tr>
							        <td>May 09, 2017</td>
							        <td>Rs. 500</td>
							        <td>Due to kharab book</td>
							      </tr>
							      <tr>
							        <td>May 09, 2017</td>
							        <td>Rs. 500</td>
							        <td>Due to late submission</td>
							      </tr>
							      <tr>
							        <td>May 09, 2017</td>
							        <td>Rs. 500</td>
							        <td>Due to late submission</td>
							      </tr>
							      <tr>
							        <td>May 09, 2017</td>
							        <td>Rs. 500</td>
							        <td>Due to late submission</td>
							      </tr>
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