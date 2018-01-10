// Importing the necessary packages.
import axios from 'axios';
import API from '../../actions/api';

/**
 * login user in the system.
 *
 * @param {Object} data email, password.
 * @return {Object} sends nextwork request
 * @since 1.0
 */
export const login = data => {
  return axios.post(`${API}users/authenticate`, data);
};

