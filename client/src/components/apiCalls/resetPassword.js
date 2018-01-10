// Importing the necessary packages.
import axios from 'axios';
import API from '../../actions/api';

/**
 * User can reset his password.
 *
 * @param  {Object} data token
 * @return {Object} sends nextwork request
 * @since 1.0
 */
export const resetPassword = data => {
  return axios.put(`${API}resetPassword`, data);
};

