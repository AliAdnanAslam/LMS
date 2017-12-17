// Importing the necessary packages.
import axios from 'axios';
import API from '../../actions/api';

/**
 * bookSearch function searching the book from database by name.
 *
 * @param  {Object} search data
 * @return {Object} sends nextwork request
 * @since 1.0
 */
export const bookSearch = data => {
	//console.log(`${API}books/search/${data.query}`);
  return axios.get(`${API}books/search/${data.query}`);
};

