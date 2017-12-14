import React, {Component} from 'react';
import Header from '../common/Header';
import { Redirect, Link } from 'react-router-dom';
import Footer from '../common/Footer';
import { connect } from 'react-redux';
import { validateLogin } from '../../utils/validation/auth';
import { login } from '../apiCalls/login';
import isAuthorized from '../../utils/validation/isAuthorized';
import setAuthToken from '../../utils/setAuthToken';


class Login extends Component {

constructor(props) {
    super(props);
    let isAuthenticated = isAuthorized();
    this.state = {
      email: '',
      password: '',
      isAuthenticated: isAuthenticated,
      response: '',
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

handleLogin(event) {
    event.preventDefault();
    const { errors, isValid } = validateLogin(this.state);
    if (!isValid) {
      return this.setState({ errors });
    }
    login(this.state)
    .then((resp) =>{
      const token = resp.data.token;
      localStorage.setItem('token', token);
      setAuthToken(token);
      this.setState({isAuthenticated:isAuthorized(), response:
      	"Wrong Email or Password"});
      console.log("authorized");

    })
    .catch((err)=>console.log(err));
}


handleChange(event) {
    event.preventDefault();
    const formField = event.target.name;
    const user = { ...this.state };
    user[formField] = event.target.value.trim();
    this.setState(() => user);
}

render() {

let bool = true;
	return (
		<div>
		{this.state.isAuthenticated ? <Redirect to='/' />  :
		<div>
	<Header login={login} />
	<div class="wrapper">
		<div class="container">
			<div class="row">
				<div class="module module-login span4 offset4">
					<form class="form-vertical" onSubmit={this.handleLogin}>
						<div class="module-head">
							<h3>Log In</h3>
						</div>
						<div class="module-body">
							<div class="control-group">
								<div class="controls row-fluid">
									<input class="span12" type="text" name="email" onChange={this.handleChange} id="inputEmail" placeholder="Email" required />
									<span>
                        				{this.state.errors &&
                        				this.state.errors.username}
                      				</span>
								</div>
							</div>
							<div class="control-group">
								<div class="controls row-fluid">
									<input class="span12" name="password" type="password" onChange={this.handleChange} id="inputPassword" placeholder="Password" required />
									<span className="red-text">
                       					 {this.state.errors &&
                        			  this.state.errors.password}
                        			</span>
								</div>
							</div>
						</div>
						<div class="module-foot">
							<div class="control-group">
								<div class="controls clearfix">
									<button type="submit" name="submit" class="btn btn-primary pull-right">Login</button>
									<Link to="/forgetpassword" style={{textDecoration: 'none'}}>
										Forget Password
									</Link>
								</div>
							</div>
						</div>
					</form>
					{ this.state.response ? <div class="alert alert-info"> {this.state.response} </div> : null }

				</div>
			</div>
			<br /><br /><br />
		</div>
	</div>
	<Footer />
	</div>
		}
		</div>

);

}

}



export default Login;
