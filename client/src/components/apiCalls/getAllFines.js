// Importing the necessary packages.
import axios from 'axios';
import API from '../../actions/api';

/**
 * getAllFines from the server.
 *
 * @param  {Object} data request. 
 * @return {Object} sends nextwork request
 * @since 1.0
 */
export const getAllFines = data => {
  return axios.get(`${API}fines`, data);
};
