// Importing the necessary packages.
import axios from 'axios';
import API from '../../actions/api';

/**
 * getFineById function searching the fines from database by id.
 *
 * @param  {Object} data id
 * @return {Object} sends nextwork request
 * @since 1.0
 */
export const getFineById = data => {
  return axios.get(`${API}getFineById`, data);
};

