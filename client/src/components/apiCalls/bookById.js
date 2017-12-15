import axios from 'axios';
import API from '../../actions/api';


export const bookById = data => {
  return axios.post(`${API}bookById`, data);
};

