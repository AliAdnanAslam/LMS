import axios from 'axios';
import API from '../../actions/api';


export const getProfile = data => {
  return axios.get(`${API}userProfile`, data);
};

