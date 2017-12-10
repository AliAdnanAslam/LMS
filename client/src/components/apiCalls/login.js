import axios from 'axios';
import API from '../../actions/api';


export const login = data => {
  return axios.post(`${API}users/authenticate`, data);
};

