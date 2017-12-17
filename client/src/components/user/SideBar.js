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
		                	<Link to='/user/dashboard'>
		                		<i class="menu-icon icon-dashboard"></i>Dashboard
		                	</Link>
		                </li>
		                <li>
		                	<Link to='/user/bookstatus'>
		                		<i class="menu-icon icon-inbox"></i>Books Status
		                    </Link>
		                </li>
		                <li>
		                	<Link to='/user/donatebook'>
		                		<i class="menu-icon icon-inbox"></i>Donate Book
		                    </Link>
		                </li>
		                <li>
		                	<Link to='/user/finestatus'>
		                		<i class="menu-icon icon-inbox"></i>Fine Status
		                    </Link>
		                </li>

		            </ul>
		        </div>
		    </div>
		);
	}
}

export default SideBar;
