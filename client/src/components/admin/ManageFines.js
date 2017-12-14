// Importing the necessary packages.
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from './SideBar';

/**
 *
 */ 
class ManageFines extends Component {
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
								      	<th>Student Name</th>
								        <th>Registration Number</th>
								        <th>Fine</th>
								        <th>Accept Fines</th>
								      </tr>
								    </thead>
								    <tbody>
								      <tr>
								      	<td>Mr. Ramzan</td>
								        <td>2015-CS-54</td>
								        <td>300</td>
								        <button type="button" class="btn btn-primary">Accept Fines</button>
								      </tr>
								      <tr>
								      	<td>Mr. Ramzan</td>
								        <td>2015-CS-54</td>
								        <td>300</td>
								        <button type="button" class="btn btn-primary">Accept Fines</button>
								      </tr>
								      <tr>
								      	<td>Mr. Ramzan</td>
								        <td>2015-CS-54</td>
								        <td>300</td>
								        <button type="button" class="btn btn-primary">Accept Fines</button>
								      </tr>
								      <tr>
								      	<td>Mr. Ramzan</td>
								        <td>2015-CS-54</td>
								        <td>300</td>
								        <button type="button" class="btn btn-primary">Accept Fines</button>
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

export default ManageFines;