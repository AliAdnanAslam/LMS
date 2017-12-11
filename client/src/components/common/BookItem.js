import React, {Component} from 'react';
import { Link } from 'react-router-dom';
class BookItem extends Component {

constructor(props) {
    super(props);
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
                            {this.props.item.name}
                        </h3>
                        <div class="stream-text">
                            <ul class="inline">
                                <li><h4>Author: </h4>{this.props.item.authorName}</li>
                                <li><h4>Edition: </h4>{this.props.item.edition}</li>
                                <li><h4>Publisher: </h4>{this.props.item.publisher ? this.props.item.publisher: "null"}</li>
                            </ul>
                        </div>
                    </div>

                    <div class="stream-options">
                        <button type="button" href="#" class="btn btn-small btn-primary">
                            Reserve
                        </button>
                        <button type="button" href="#" class="btn btn-small btn-primary" disabled>
                            Not Available
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

}

export default BookItem;
