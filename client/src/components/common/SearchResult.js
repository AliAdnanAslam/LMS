import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class Search extends Component {

constructor(props) {
    super(props);
}


render() {
	return (
        <div>
            <Header />
            <div class="wrapper">
                <div class="container">
                    <div class="row">
                        <h1> {this.props.match.params.query} </h1>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
	);
}
}

export default Search;
