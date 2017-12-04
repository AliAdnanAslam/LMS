// Importing the necessary packages.
import React, {Component} from 'react';
 
/**
 *
 */ 
class Dashboard extends Component {
  render() {
    return (
      <div class="span9">
        <div class="btn-box-row row-fluid">
            <a href="#" class="btn-box big span4"><i class=" icon-book"></i><b>65%</b>
                <p class="text-muted">
                    Issued Books</p>
            </a>
            <a href="#" class="btn-box big span4"><i class="icon-book"></i><b>15</b>
                <p class="text-muted">
                    Pending Books</p>
            </a>
            <a href="#" class="btn-box big span4"><i class="icon-save"></i><b>15,152</b>
                <p class="text-muted">
                    Total Fines</p>
            </a>
        </div>       
      </div>           
    );
  }
}

export default Dashboard;