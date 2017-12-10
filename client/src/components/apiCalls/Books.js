import axios from 'axios';
import API from '../../actions/api';

/**
 * add new book to database
 * @param  {Object} data book data
 * @return {Object}      sends nextwork request
 */
export const addBook = data => {
  return axios.post(`${API}books/donate`, data)

    // .catch(error => {
    // 	console.log("Ops! Error Calling API");
    //   console.log(error);
    // })
};

