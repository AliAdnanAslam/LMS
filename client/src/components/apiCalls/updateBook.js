// Importing the necessary packages.
import axios from 'axios';
import API from '../../actions/api';

/**
 * Admin updates book data in db.
 *
 * @param  {Object} data book data
 * @return {Object} sends nextwork request
 * @since 1.0
 */
export const updateBook = data => {
  return axios.put(`${API}updateBook`, data);
};

