// Importing the necessary packages.
import axios from 'axios';
import API from '../../actions/api';

/**
 * When user returns book to admin.
 *
 * @param  {Object} data id
 * @return {Object} sends nextwork request
 * @since 1.0
 */
export const receiveBook = data => {
  return axios.put(`${API}receiveBook`, data);
};

