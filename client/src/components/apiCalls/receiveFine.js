// Importing the necessary packages.
import axios from 'axios';
import API from '../../actions/api';

/**
 * receiveFine function calls when user pays his fines.
 *
 * @param  {Object} data ID
 * @return {Object} sends nextwork request
 * @since 1.0
 */
export const receiveFine = data => {
  return axios.put(`${API}receiveFine`, data);
};

