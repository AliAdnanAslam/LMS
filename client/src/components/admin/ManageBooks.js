// Importing the necessary packages.
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from './SideBar';

/**
 *
 */ 
class ManageBooks extends Component {

/**
 * Render.
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
								<Link to='/admin/addbook'>
									<button type="button" class="btn btn-primary pull-left">Add Book</button> 
								</Link>
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
							        <Link to='/admin/modifybook'>
								        <button type="button" class="btn btn-primary">Modify</button>
									</Link>
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