import axios from 'axios';
import API from '../../actions/api';


export const getFineById = data => {
  return axios.get(`${API}getFineById`, data);
};

