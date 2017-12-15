import axios from 'axios';
import API from '../../actions/api';


export const updateBook = data => {
  return axios.put(`${API}updateBook`, data);
};

