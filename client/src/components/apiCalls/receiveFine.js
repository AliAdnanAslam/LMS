import axios from 'axios';
import API from '../../actions/api';


export const receiveFine = data => {
  return axios.put(`${API}receiveFine`, data);
};

