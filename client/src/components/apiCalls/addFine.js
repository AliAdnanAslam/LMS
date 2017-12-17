// Importing the necessary packages.
import axios from 'axios';
import API from '../../actions/api';

/**
 * Add fine to database.
 *
 * @param  {Object} data fine data
 * @return {Object} sends nextwork request
 * @since 1.0
 */
export const addFine = data => {
  return axios.post(`${API}addFine`, data)
};

