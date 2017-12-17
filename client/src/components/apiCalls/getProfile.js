// Importing the necessary packages.
import axios from 'axios';
import API from '../../actions/api';

/**
 * getProfile from the database.
 *
 * @param  {Object} data user id
 * @return {Object} sends nextwork request
 * @since 1.0
 */
export const getProfile = data => {
  return axios.get(`${API}userProfile`, data);
};

