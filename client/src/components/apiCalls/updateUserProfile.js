// Importing the necessary packages.
import axios from 'axios';
import API from '../../actions/api';

/**
 * Update user data.
 *
 * @param  {Object} data user data
 * @return {Object} sends nextwork request
 * @since 1.0
 */
export const updateUserProfile = data => {
  return axios.put(`${API}updateUser`, data);
};

