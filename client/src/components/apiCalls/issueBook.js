// Importing the necessary packages.
import axios from 'axios';
import API from '../../actions/api';

/**
 * issueBook .
 *
 * @param  {Object} data issue request
 * @return {Object} sends nextwork request
 * @since 1.0
 */
export const issueBook = data => {
  return axios.put(`${API}issueBook`, data);
};

