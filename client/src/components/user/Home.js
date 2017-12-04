// Importing the necessary packages.
import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';
import Dashboard from './Dashboard';
import ReserveBook from './ReserveBook';
import BookStatus from './BookStatus';
import FineStatus from './FineStatus';
import DonateBook from './DonateBook';

/**
 *
 */
class Home extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
      		<Header userLoggedIn="true" />
      		<div class="wrapper">
      			<div class="container">
              <div class="row">
                  <SideBar />
                    <div className='userDashboard'>
                        <Route path='/user/Dashboard' exact component={ Dashboard } />
                        <Route path='/user/ReserveBook' exact component={ ReserveBook } />
                        <Route path='/user/DonateBook' exact component={ DonateBook } />
                        <Route path='/user/FineStatus' exact component={ FineStatus } />
                        <Route path='/user/BookStatus' exact component={ BookStatus } />
                    </div>
            	</div>
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default Home;
