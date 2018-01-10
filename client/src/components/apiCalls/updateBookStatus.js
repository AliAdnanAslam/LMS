// Importing the necessary packages.
import axios from 'axios';
import API from '../../actions/api';

/**
 * Update book status to available, donated or reserved.
 *
 * @param  {Object} data ID
 * @return {Object} sends nextwork request
 * @since 1.0
 */
export const updateBookStatus = data => {
  return axios.put(`${API}updateBookStatus`, data);
};

