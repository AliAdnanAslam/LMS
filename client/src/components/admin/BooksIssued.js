// Importing the necessary packages.
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from './SideBar';
import { getAllBooks } from '../apiCalls/getAllBooks';

/**
 *
 */
class BooksIssued extends Component {

constructor(props) {
	super(props);
	this.state = {
		books: [],
		originalBooks: [],
		exists: false,
		searched: false,
	}
}

componentDidMount() {
	getAllBooks()
	.then(resp => {
		this.setState({books: resp.data, originalBooks: resp.data , exists: true})
	})
	.catch((err)=>console.log(err));

}

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
								     {  this.state.exists ? this.state.books.map(book =>

								     	<tr>
								      	<td>{book.name}</td>
								        <td>{book.authorName}</td>
								        <td>{book.edition}</td>
								        <Link to={`/admin/modifybook/${book._id}`}>
									        <button type="button" style={{'marginTop':'5px'}} class="btn btn-info">Modify</button>
										</Link>
								      </tr>

								     ) :
								     <div> No Books :| </div>
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

export default BooksIssued;
