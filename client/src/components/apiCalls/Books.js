// Importing the necessary packages.
import axios from 'axios';
import API from '../../actions/api';

/**
 * addBook function adds new book in the database.
 *
 * @param  {Object} book data
 * @return {Object} sends nextwork request
 * @since 1.0
 */
export const addBook = data => {
  return axios.post(`${API}books/donate`, data)
};

