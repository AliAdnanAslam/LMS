// Importing the necessary packages.
import axios from 'axios';
import API from '../../actions/api';

/**
 * Add user to database.
 *
 * @param  {Object} user data
 * @return {Object} sends nextwork request
 * @since 1.0
 */
export const addUser = data => {
  return axios.post(`${API}users`, data)
};

