import axios from 'axios';
import API from '../../actions/api';

export const addUser = data => {
  return axios.post(`${API}users`, data)
};

