import axios from 'axios';
import API from '../../actions/api';


export const reserveBook = data => {
  return axios.put(`${API}reserveBook`, data);
};

