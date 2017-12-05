// Importing the necessary packages.
import React, {Component} from 'react';
 
/**
 *
 */ 
class ManageBooks extends Component {
  render() {
    return (
		<div class="span9">
			<div class="jumbotron well">
				<div>
					<br />
					<button type="button" class="btn btn-primary pull-left">Add Book</button> 
				</div>
				<br />
				<table class="table table-striped">
				    <thead>
				      <tr>
				      	<th>Book Name</th>
				        <th>Author</th>
				        <th>Edition</th>
				        <th>Modify</th>
				      </tr>
				    </thead>
				    <tbody>
				      <tr>
				      	<td>Software Engineering</td>
				        <td>John Faloode wala</td>
				        <td>5th</td>
				        <button type="button" class="btn btn-primary">Modify</button>
				      </tr>
				      <tr>
				      	<td>Software Engineering</td>
				        <td>John Faloode wala</td>
				        <td>5th</td>
				        <button type="button" class="btn btn-primary">Modify</button>
				      </tr>
				      <tr>
				      	<td>Software Engineering</td>
				        <td>John Faloode wala</td>
				        <td>5th</td>
				        <button type="button" class="btn btn-primary">Modify</button>
				      </tr>
				      <tr>
				      	<td>Software Engineering</td>
				        <td>John Faloode wala</td>
				        <td>5th</td>
				        <button type="button" class="btn btn-primary">Modify</button>
				      </tr>
				    </tbody>
				</table>
			</div>
		</div>          
    );
  }
}

export default ManageBooks;