// Importing the necessary packages.
import React, {Component} from 'react';
 
/**
 *
 */ 
class BookStatus extends Component {
  render() {
    return (
		<div class="span9">
			<div class="jumbotron thumbnail">
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
    );
  }
}

export default BookStatus;