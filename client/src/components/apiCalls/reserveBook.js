// Importing the necessary packages.
import axios from 'axios';
import API from '../../actions/api';

/**
 * User reserves book and this call changes status in db.
 *
 * @param  {Object} data ID
 * @return {Object} sends nextwork request
 * @since 1.0
 */
export const reserveBook = data => {
  return axios.put(`${API}reserveBook`, data);
};

