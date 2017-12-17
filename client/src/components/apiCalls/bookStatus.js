import axios from 'axios';
import API from '../../actions/api';
export const bookStatus = data => {
  return axios.get(`${API}bookStatus`, data)
};

