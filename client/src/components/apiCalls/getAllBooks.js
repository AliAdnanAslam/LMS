// Importing the necessary packages.
import axios from 'axios';
import API from '../../actions/api';

/**
 * getAllBooks from the server.
 *
 * @param  {Object} data request. 
 * @return {Object} sends nextwork request
 * @since 1.0
 */
export const getAllBooks = data => {
  return axios.get(`${API}books`, data);
};

