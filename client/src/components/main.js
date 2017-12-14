import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './user/Home';
import BookStatus from './user/BookStatus';
import Dashboard from './user/Dashboard';
import DonateBook from './user/DonateBook';
import FineStatus from './user/FineStatus';
import ManageUsers from './admin/ManageUsers';
import AddUser from './admin/AddUser';
import ModifyUser from './admin/ModifyUser';
import ManageBooks from './admin/ManageBooks';
import ModifyBook from './admin/ModifyBook';
import AddBook from './admin/AddBook';
import ManageFines from './admin/ManageFines';
import AddFine from './admin/AddFine';
import DonationRequests from './admin/DonationRequests';
import DashboardAdmin from './admin/Dashboard';
import Login from './authentication/Login';
import SignUp from './authentication/SignUp';
import ForgetPassword from './authentication/ForgetPassword';
import ChangePassword from './authentication/ChangePassword';
import ResetPassword from './authentication/ResetPassword';
import FrontPage from './FrontPage';
import Search from './common/SearchResult';
import Profile from './common/Profile';
import PrivateRoute from './common/PrivateRoute';


class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='main'>
            <Route path='/' exact component={ FrontPage } />
            <Route path='/user' exact component={ Home } />
            <Route path='/admin/manageusers' component={ ManageUsers } />
            <Route path='/admin/adduser' component={ AddUser } />
            <Route path='/admin/modifyuser/:userId' component={ ModifyUser } />
            <Route path='/admin/managebooks' component={ ManageBooks } />
            <Route path='/admin/modifybook' component={ ModifyBook } />
            <Route path='/admin/addbook' component={ AddBook } />
            <Route path='/admin/managefines' component={ ManageFines } />
            <Route path='/admin/addfine' component={ AddFine } />
            <Route path='/admin/donationrequests' component={ DonationRequests } />
            <Route path='/admin/dashboard' component={ DashboardAdmin } />
            <Route path='/login'  component={ Login } />
            <Route path='/signup'  component={ SignUp } />
            <Route path='/forgetpassword'  component={ ForgetPassword } />
            <Route path="/search/:query" component={ Search }/>
            <Route path="/resetPassword/:token" component={ ResetPassword }/>
            <Route path="/user/profile" component={ Profile }/>
            <Route path='/user/changepassword'  component={ ChangePassword } />
            <Route path="/user/bookstatus" component={ BookStatus }/>
            <Route path="/user/dashboard" component={ Dashboard }/>
            <Route path="/user/donatebook" component={ DonateBook }/>
            <Route path="/user/finestatus" component={ FineStatus }/>
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
