// Importing the necessary packages.
import React, {Component} from 'react';

/**
 * Footer component for static footer.
 *
 * @class Footer
 * @extends {Component}
 * @since  1.0
 */
class Footer extends Component {

/**
 * Render.
 *
 * @return {ReactElement} markup
 * @since  1.0
 */		
render() {
	return (
        <div class="footer">
            <div class="container">
                <b class="copyright">&copy; 2017 LMS - UET Lahore  </b>All rights reserved.
            </div>
        </div>            
	);
}
}

export default Footer;