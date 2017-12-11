import axios from 'axios';
import API from '../../actions/api';


export const bookSearch = data => {
	console.log(`${API}books/search/${data.query}`);
  return axios.get(`${API}books/search/${data.query}`);
};

