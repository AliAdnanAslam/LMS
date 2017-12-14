import axios from 'axios';
import API from '../../actions/api';


export const userProfileById = data => {
  return axios.post(`${API}userProfileById`, data);
};

