// Importing the necessary packages.
import axios from 'axios';
import API from '../../actions/api';

/**
 * forgetPassword function sends the change request to nodemailer.
 *
 * @param  {Object} data email. 
 * @return {Object} sends nextwork request
 * @since 1.0
 */
export const forgetPassword = data => {
  return axios.put(`${API}forgetPassword`, data);
};

