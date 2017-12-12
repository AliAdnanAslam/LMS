// Importing the necessary packages.
import React, {Component} from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from '../common/SideBar';

/**
 *
 */ 
class ManageBooks extends Component {
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
					</div>
				</div>
			</div>
			<Footer />
		</div>
    );
  }
}

export default ManageBooks;