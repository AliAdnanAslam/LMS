import axios from 'axios';
import API from '../../actions/api';


export const getAllBooks = data => {
  return axios.get(`${API}books`, data);
};

