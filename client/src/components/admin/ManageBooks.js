// Importing the necessary packages.
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SideBar from './SideBar';
import { getAllBooks } from '../apiCalls/getAllBooks';

/**
 * ManageBooks component for admin to add or modify books.
 *
 * @class ManageBooks
 * @extends {Component}
 * @since  1.0
 */
class ManageBooks extends Component {

/**
 * constructor
 *
 * @param {object} props
 * @since  1.0 
 */
constructor(props) {
	super(props);
	this.state = {
		books: [],
		originalBooks: [],
		exists: false,
		searched: false,
	}
    this.search = this.search.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
}

/**
 * handle search form event onSubmit
 *
 * @param {SytheticEvent} event
 * @since  1.0
 */
search = event => {
    event.preventDefault();
    let query = document.getElementById('search-query').value;
    if(query) {
        this.setState( { searched: true });
        let book = this.state.originalBooks.filter( book => {
          return book.name == query;
        });
        if(book.length !== 0 ) {
            this.setState( { books: book, exists: true } );
        } else {
            this.setState( { exists: false });
        }

    }
}

/**
 * Clear search form event clears search bar
 *
 * @param {SytheticEvent} event
 * @since  1.0
 */
clearSearch = event => {
    this.setState( { searched: false, exists: true, books: this.state.originalBooks });
}

/**
 * componentDidMount provides lifecycle methods called after component mounts the DOM
 *
 * @since  1.0
 */
componentDidMount() {
	getAllBooks()
	.then(resp => {
		this.setState({books: resp.data, originalBooks: resp.data , exists: true})
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
						<div class="module-option clearfix row">
                                <form>
                                <div class="input-append pull-left">
                                    <input type="text" class="span3" id="search-query" placeholder="Enter Book Name" />
                                    <button type="submit" onClick={this.search} class="btn">
                                        <i class="icon-search"></i>
                                    </button>
                                </div>
                                </form>
                                {this.state.searched ?
                                    <form>
                                <div class="input-append pull-left">
                                    <button style = { {'marginLeft': '20px'} } type="submit" onClick={this.clearSearch} class="btn btn-danger"> Clear Search </button>
                                </div>
                                </form>

                                     : null}
                                <div class="pull-right">
                                    <Link to='/admin/addbook'>
									<button type="button" style={{'marginRight':'20px'}} class="btn btn-primary">Add Book</button>
									</Link>
                                </div>
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

export default ManageBooks;
