// Importing the necessary packages.
import axios from 'axios';
import API from '../../actions/api';

/**
 * changePassword function provides password change request to api.
 *
 * @param  {Object} data old password 
 * @return {Object} sends nextwork request
 * @since 1.0
 */
export const changePassword = data => {
  return axios.put(`${API}changePassword`, data);
};

