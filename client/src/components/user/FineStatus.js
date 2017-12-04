// Importing the necessary packages.
import React, {Component} from 'react';
 
/**
 *
 */ 
class FineStatus extends Component {
  render() {
    return (
		<div class="span9">
			<div class="jumbotron thumbnail">
				<div>
					<br />
					<h1 style={{textAlign: 'center'}}>Fines</h1>
				</div>
				<br />
				<table class="table table-striped">
				    <thead>
				      <tr>
				      	<th>Date</th>
				        <th>Rupees</th>
				        <th>Reason</th>
				      </tr>
				    </thead>
				    <tbody>
				      <tr>
				        <td>May 09, 2017</td>
				        <td>Rs. 500</td>
				        <td>Due to kharab book</td>
				      </tr>
				      <tr>
				        <td>May 09, 2017</td>
				        <td>Rs. 500</td>
				        <td>Due to late submission</td>
				      </tr>
				      <tr>
				        <td>May 09, 2017</td>
				        <td>Rs. 500</td>
				        <td>Due to late submission</td>
				      </tr>
				      <tr>
				        <td>May 09, 2017</td>
				        <td>Rs. 500</td>
				        <td>Due to late submission</td>
				      </tr>
				    </tbody>
				</table>
			</div>
		</div>          
    );
  }
}

export default FineStatus;