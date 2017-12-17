// Importing the necessary packages.
import React, {Component} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from './SideBar';

/**
 * BookStatus component for displaying the reserved and issued books by user.
 *
 * @class BookStatus
 * @extends {Component}
 * @since  1.0
 */
class BookStatus extends Component {

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
							      <tr>
							      	<td>Software Engineering</td>
							        <td>May 09, 2017</td>
							        <td>May 29, 2017</td>
							        <td>Issued</td>
							      </tr>
							      <tr>
							      	<td>Software Engineering</td>
							        <td>May 09, 2017</td>
							        <td>May 29, 2017</td>
							        <td>Reserved</td>
							      </tr>
							      <tr>
							      	<td>Software Engineering</td>
							        <td>May 09, 2017</td>
							        <td>May 29, 2017</td>
							        <td>Issued</td>
							      </tr>
							      <tr>
							      	<td>Software Engineering</td>
							        <td>May 09, 2017</td>
							        <td>May 29, 2017</td>
							        <td>Issued</td>
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

export default BookStatus;
