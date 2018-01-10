// Importing the necessary packages.
import axios from 'axios';
import API from '../../actions/api';

/**
 * bookById function searching the book from database by id.
 *
 * @param  {Object} data id
 * @return {Object} sends nextwork request
 * @since 1.0
 */
export const bookById = data => {
  return axios.post(`${API}bookById`, data);
};

