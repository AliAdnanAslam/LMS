import axios from 'axios';
import API from '../../actions/api';


export const updateUserProfile = data => {
  return axios.put(`${API}updateUser`, data);
};

