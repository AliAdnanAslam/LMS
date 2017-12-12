import axios from 'axios';
import API from '../../actions/api';


export const resetPassword = data => {
  return axios.put(`${API}resetPassword`, data);
};

