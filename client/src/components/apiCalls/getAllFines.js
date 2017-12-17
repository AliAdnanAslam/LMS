import axios from 'axios';
import API from '../../actions/api';


export const getAllFines = data => {
  return axios.get(`${API}fines`, data);
};
