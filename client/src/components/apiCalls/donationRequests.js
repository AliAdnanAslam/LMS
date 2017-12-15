import axios from 'axios';
import API from '../../actions/api';


export const donatedBooks = data => {
  return axios.get(`${API}donatedBooks`, data);
};

