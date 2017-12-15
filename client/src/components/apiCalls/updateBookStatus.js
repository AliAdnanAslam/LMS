import axios from 'axios';
import API from '../../actions/api';


export const updateBookStatus = data => {
  return axios.put(`${API}updateBookStatus`, data);
};

