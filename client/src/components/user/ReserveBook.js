// Importing the necessary packages.
import React, {Component} from 'react';

/**
 * 
 */
class ReserveBook extends Component {
  render() {
    return (
		<div class="span9">
			<div class="well">
				<h1>Software Engineering Book by it's Author</h1>
			</div>
			<div class="well well-sm">
				<div style={{float:'right', paddingTop:'60px'}}>
					<h5>Author Name: Name</h5>
					<h5>Author ID: 103937</h5>
					<h5>Edition: 5th</h5>
					<h5>Publication: Statistics Canada. 1998. Labour Markets</h5>
					<h5>Publication Year: 1998</h5>
					<h5>Remaining Books: 182</h5>
				</div>
				<img src={require('E:\\Study\\SE_Project\\LMS\\LMS\\client\\src\\images\\beginning_ruby.jpg')} 
				alt=""
				/>
			</div>
			
		</div>
    );
  }
}

export default ReserveBook;
