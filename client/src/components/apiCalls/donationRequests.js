// Importing the necessary packages.
import axios from 'axios';
import API from '../../actions/api';

/**
 * donatedBooks function provides book donation request.
 *
 * @param  {Object} data user id and book data. 
 * @return {Object} sends nextwork request
 * @since 1.0
 */
export const donatedBooks = data => {
  return axios.get(`${API}donatedBooks`, data);
};

