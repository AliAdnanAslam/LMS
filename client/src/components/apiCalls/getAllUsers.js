// Importing the necessary packages.
import axios from 'axios';
import API from '../../actions/api';

/**
 * getAllUsers from the server.
 *
 * @param  {Object} data request. 
 * @return {Object} sends nextwork request
 * @since 1.0
 */
export const getAllUsers = data => {
  return axios.get(`${API}users`, data);
};

