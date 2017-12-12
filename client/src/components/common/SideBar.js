// Importing the necessary packages.
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

/**
 * SideBar class provides the static sidebar.
 */
class SideBar extends Component {
    /**
     * render() function returns the complete html code of sidebar.
     */
	render() {
		return (
			<div class="span3">
		        <div class="sidebar">
		            <ul class="widget widget-menu unstyled">
		                <li class="active">
		                	<Link to='/user/Dashboard'>
		                		<i class="menu-icon icon-dashboard"></i>Dashboard
		                	</Link>
		                </li>
		                <li>
		                	<Link to='/user/DonateBook'>
		                		<i class="menu-icon icon-inbox"></i>Donate Book
		                    </Link>
		                </li>
		                <li>
		                	<Link to='/user/FineStatus'>
		                		<i class="menu-icon icon-tasks"></i>Fine Status
		                    </Link>
		                </li>
		                <li>
		                	<Link to="/user/BookStatus">
		                		<i class="menu-icon icon-tasks"></i>Books Status
		                    </Link>
		                </li>
		            </ul>
		        </div>
		    </div>
		);
	}
}

export default SideBar;
