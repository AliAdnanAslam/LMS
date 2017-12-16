import axios from 'axios';
import API from '../../actions/api';


export const getAllOrders = data => {
  return axios.get(`${API}orders`, data);
};



