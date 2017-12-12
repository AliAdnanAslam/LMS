import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './user/Home';
import HomeAdmin from './admin/Home';
import Login from './authentication/Login';
import SignUp from './authentication/SignUp';
import ForgetPassword from './authentication/ForgetPassword';
import ResetPassword from './authentication/ResetPassword';
import FrontPage from './FrontPage';
import Search from './common/SearchResult';


class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='main'>
            <Route path='/' exact component={ FrontPage } />
            <Route path='/user' exact component={ Home } />
            <Route path='/admin' exact component={ HomeAdmin } />
            <Route path='/login'  component={ Login } />
            <Route path='/signup'  component={ SignUp } />
            <Route path='/forgetpassword'  component={ ForgetPassword } />
            <Route path="/search/:query" component={ Search }/>
            <Route path="/resetPassword/:token" component={ ResetPassword }/>
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
