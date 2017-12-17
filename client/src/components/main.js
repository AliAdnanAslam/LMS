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
import BooksResRequests from './admin/BooksResRequests';
import BooksIssued from './admin/BooksIssued';
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
            <PrivateRoute path='/user' exact component={ Home } />
            <PrivateRoute path='/admin/manageusers' component={ ManageUsers } />
            <PrivateRoute path='/admin/adduser' component={ AddUser } />
            <PrivateRoute path='/admin/modifyuser/:userId' component={ ModifyUser } />
            <PrivateRoute path='/admin/managebooks' component={ ManageBooks } />
            <PrivateRoute path='/admin/modifybook/:bookId' component={ ModifyBook } />
            <PrivateRoute path='/admin/addbook' component={ AddBook } />
            <PrivateRoute path='/admin/booksResRequests' component={ BooksResRequests } />
            <PrivateRoute path='/admin/managefines' component={ ManageFines } />
            <PrivateRoute path='/admin/BooksIssued' component={ BooksIssued } />
            <PrivateRoute path='/admin/addfine' component={ AddFine } />
            <PrivateRoute path='/admin/donationrequests' component={ DonationRequests } />
            <PrivateRoute path='/admin/dashboard' component={ DashboardAdmin } />
            <Route path='/login'  component={ Login } />
            <Route path='/signup'  component={ SignUp } />
            <Route path='/forgetpassword'  component={ ForgetPassword } />
            <Route path="/search/:query" component={ Search }/>
            <Route path="/resetPassword/:token" component={ ResetPassword }/>
            <PrivateRoute path="/user/profile" component={ Profile }/>
            <PrivateRoute path='/user/changepassword'  component={ ChangePassword } />
            <PrivateRoute path="/user/bookstatus" component={ BookStatus }/>
            <PrivateRoute path="/user/dashboard" component={ Dashboard }/>
            <PrivateRoute path="/user/donatebook" component={ DonateBook }/>
            <PrivateRoute path="/user/finestatus" component={ FineStatus }/>
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
