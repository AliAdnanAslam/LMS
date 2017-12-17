import axios from 'axios';
import API from '../../actions/api';

export const addFine = data => {
  return axios.post(`${API}addFine`, data)
};

