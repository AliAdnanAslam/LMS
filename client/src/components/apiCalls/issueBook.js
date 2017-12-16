import axios from 'axios';
import API from '../../actions/api';


export const issueBook = data => {
  return axios.put(`${API}issueBook`, data);
};

