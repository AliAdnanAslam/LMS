// Importing the necessary packages.
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

/**
 * SideBar component provides the static sidebar.
 *
 * @class SideBar
 * @extends {Component}
 * @since  1.0
 */
class SideBar extends Component {
<<<<<<< HEAD
    /**
     * render() function returns the complete html code of sidebar.
     */
	render() {
		return (
			<div class="span3">
		        <div class="sidebar">
		            <ul class="widget widget-menu unstyled">
		                <li class="active">
		                	<Link to='/admin/dashboard'>
		                		<i class="menu-icon icon-dashboard"></i>Dashboard
		                	</Link>
		                </li>
		                <li>
		                	<Link to='/admin/manageusers'>
		                		<i class="menu-icon icon-inbox"></i>Manage Users
		                    </Link>
		                </li>
		                <li>
		                	<Link to='/admin/managebooks'>
		                		<i class="menu-icon icon-inbox"></i>Manage Books
		                    </Link>
		                </li>
		                <li>
		                	<Link to='/admin/managefines'>
		                		<i class="menu-icon icon-inbox"></i>Manage Fines
		                    </Link>
		                </li>
		               <li>
		                	<Link to="/admin/booksIssued">
		                		<i class="menu-icon icon-tasks"></i>Books Issued
		                    </Link>
		                </li>
		                <li>
		                	<Link to="/admin/donationrequests">
		                		<i class="menu-icon icon-tasks"></i>Book Donation Requests
		                    </Link>
		                </li>
		                <li>
		                	<Link to="/admin/booksResRequests">
		                		<i class="menu-icon icon-tasks"></i>Books Reservation Requests
		                    </Link>
		                </li>

		            </ul>
		        </div>
		    </div>
		);
	}
=======

/**
 * Renders components to DOM.
 *
 * @return {ReactElement} markup
 * @since  1.0
 */	
render() {
	return (
		<div class="span3">
	        <div class="sidebar">
	            <ul class="widget widget-menu unstyled">
	                <li class="active">
	                	<Link to='/admin/dashboard'>
	                		<i class="menu-icon icon-dashboard"></i>Dashboard
	                	</Link>
	                </li>
	                <li>
	                	<Link to='/admin/manageusers'>
	                		<i class="menu-icon icon-inbox"></i>Manage Users
	                    </Link>
	                </li>
	                <li>
	                	<Link to='/admin/managebooks'>
	                		<i class="menu-icon icon-inbox"></i>Manage Books
	                    </Link>
	                </li>
	                <li>
	                	<Link to='/admin/managefines'>
	                		<i class="menu-icon icon-inbox"></i>Manage Fines
	                    </Link>
	                </li>
	                <li>
	                	<Link to="/admin/donationrequests">
	                		<i class="menu-icon icon-tasks"></i>Book Donation Requests
	                    </Link>
	                </li>
	            </ul>
	        </div>
	    </div>
	);
}
>>>>>>> 9895abc42166bca883f89fdb9aa6123ae1063b72
}

export default SideBar;
