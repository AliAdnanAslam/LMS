import axios from 'axios';
import API from '../../actions/api';


export const changePassword = data => {
  return axios.put(`${API}changePassword`, data);
};

