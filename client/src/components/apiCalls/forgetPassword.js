import axios from 'axios';
import API from '../../actions/api';


export const forgetPassword = data => {
  return axios.put(`${API}forgetPassword`, data);
};

