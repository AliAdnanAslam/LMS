// Importing the necessary packages.
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BookItem from './BookItem';
import './searchpage.css';
import { bookSearch } from '../apiCalls/bookSearch';

/**
 * Search component provides searching of books by name.
 *
 * @class Search
 * @extends {Component}
 * @since  1.0
 */  
class Search extends Component {

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
        query: '',
        totalResults: '',
        exists: false,
    }

    // Binding functions to instances
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
}

/**
 * componentDidMount provides lifecycle methods 
 * called after component mounts the DOM
 *
 * @since  1.0
 */
componentDidMount() {
    console.log('GrandChild did mount.', this.props.match.params.query);
    this.setState({query: this.props.match.params.query});
    bookSearch({query: this.props.match.params.query}) // Find books.
        .then((resp) => {
            if(resp.data.length !== 0) { // If books found.
                console.log(resp.data);
                this.setState ({
                    books: resp.data,
                    totalResults: resp.data.length,
                    exists: true,
                })
            }

        })
        .catch((err)=>console.log(err));
}

/**
 * handle Change event at input form
 *
 * @param {SytheticEvent} event
 * @since  1.0
 */
handleChange(event) {
    event.preventDefault();
    const formField = event.target.name;
    const search = { ...this.state };
    search[formField] = event.target.value.trim();
    this.setState(() => search);
}

/**
 * handle Search form event onSubmit
 *
 * @param {SytheticEvent} event
 * @since  1.0
 */
handleSearch = (event) => {
    event.preventDefault();
    if(this.state.query !== '') { // If query is not empty.
        this.setState({
        books: [],
        totalResults: '',
        exists: false,
    });
        console.log(this.state);
        bookSearch(this.state) // Find books.
        .then((resp) => {
            if(resp.data.length !== 0) { // If books found.
                this.setState ({
                    books: resp.data,
                    totalResults: resp.data.length,
                    exists: true,
                })
            }

        })
        .catch((err)=>console.log(err));
    }

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
            <Header />
            <div class= "wrapper">
                <div class="container">
                    <form onSubmit={this.handleSearch}>
                        <div className="searchBox">
                            <div class="search-bar clearfix">
                                <input class="form-control" type="text" id="search-text" name="query" onChange={this.handleChange} placeholder="Search"/>
                                <input class="btn btn-primary" type="submit" value="Search"/>
                            </div>
                        </div>
                    </form>
                    <div>
                        <h3></h3>
                        <h3>Search Results</h3>
                        <h4><strong class="text-error">{this.state.totalResults ? this.state.totalResults : '0'}</strong> results were found for the search for <strong class="text-error">{this.state.query}</strong></h4>
                    </div>

                    {this.state.exists ? this.state.books.map( book => <BookItem item={book}/> ) : null}

                </div>
            </div>
            <Footer />
        </div>
	);
}
}

export default Search;
