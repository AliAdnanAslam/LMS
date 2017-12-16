import axios from 'axios';
import API from '../../actions/api';


export const receiveBook = data => {
  return axios.put(`${API}receiveBook`, data);
};

