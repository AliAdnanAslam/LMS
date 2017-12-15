import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { reserveBook } from '../apiCalls/reserveBook';



class BookItem extends Component {

constructor(props) {
    super(props);
    let isLoggedIn = false;
    if( localStorage.getItem('token') ) {
        isLoggedIn = true;
    }
    this.state = {
        isLoggedIn: isLoggedIn,
        bookId: this.props.item._id,
        response: ''
    }

    this.available = true;
    if(this.props.item.status != 'available') {
        this.available = false;
    }

    this.reserveBook = this.reserveBook.bind(this);
}

reserveBook = (event) => {
    if(this.state.isLoggedIn) {
        reserveBook(this.state)
        .then((resp) => {
            this.available = false;
            this.setState({response: 'reserved!'});

        })
        .catch((err)=>console.log(err));
    } else {
        this.setState({response: 'Please Login First'});
    }

}


render() {
    return (
        <section>
            <div class="media stream">
                <a href="#" class="book-img medium pull-left">
                    <img src={this.props.item.image ? this.props.item.image : "https://i.imgur.com/g5Un3gA.jpg"}/>
                </a>
                <div class="media-body">
                    <div class="stream-headline">
                        <h3>
                            {this.props.item.bookId[0].name}
                        </h3>
                        <div class="stream-text">
                            <ul class="inline">
                                <li><h4>Author: </h4>{this.props.item.bookId[0].authorName}</li>
                                <li><h4>Edition: </h4>{this.props.item.bookId[0].edition}</li>
                                <li><h4>Donated By: </h4>{this.props.item.userId[0].name ? this.props.item.userId[0].name: "null"}</li>
                                <li><h4>Status: </h4>{this.props.item.bookId[0].status ? this.props.item.bookId[0].status: "undefined"}</li>
                            </ul>
                        </div>
                    </div>

                    <div class="stream-options">
                        {this.available ?
                        <button type="button" href="#" onClick={this.reserveBook} class="btn btn-small btn-primary">
                            Reserve
                        </button> : <button type="button" href="#" class="btn btn-small btn-primary" disabled>
                            Not Available
                        </button> }
                        { this.state.response ? <div class="alert alert-info"> {this.state.response} </div> : null }

                    </div>
                </div>
            </div>
        </section>
    )
}

}

export default BookItem;
