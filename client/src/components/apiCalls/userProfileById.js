// Importing the necessary packages.
import axios from 'axios';
import API from '../../actions/api';

/**
 * Search user profile by id.
 *
 * @param  {Object} data ID
 * @return {Object} sends nextwork request
 * @since 1.0
 */
export const userProfileById = data => {
  return axios.post(`${API}userProfileById`, data);
};

