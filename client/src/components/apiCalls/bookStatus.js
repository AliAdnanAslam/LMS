// Importing the necessary packages.
import axios from 'axios';
import API from '../../actions/api';

/**
 * bookStatus function set book status.
 *
 * @param  {Object} data status
 * @return {Object} sends nextwork request
 * @since 1.0
 */
export const bookStatus = data => {
  return axios.get(`${API}bookStatus`, data)
};

