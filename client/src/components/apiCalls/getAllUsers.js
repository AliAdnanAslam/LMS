import axios from 'axios';
import API from '../../actions/api';


export const getAllUsers = data => {
  return axios.get(`${API}users`, data);
};

