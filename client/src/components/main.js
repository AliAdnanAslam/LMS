import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './user/Home';
import Login from './authentication/Login';
import SignUp from './authentication/SignUp';
import ForgetPassword from './authentication/ForgetPassword';
import FrontPage from './FrontPage';

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='main'>
            <Route path='/' exact component={ FrontPage } />
            <Route path='/user' exact component={ Home } />
            <Route path='/login'  component={ Login } />
            <Route path='/signup'  component={ SignUp } />
            <Route path='/forgetpassword'  component={ ForgetPassword } />          
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
