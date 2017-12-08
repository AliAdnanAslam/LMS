import axios from 'axios';
import actionTypes from '../actions/actionTypes';
import API from './api';



export const addBookAction = book => ({
  type: actionTypes.ADD_BOOK,
  book,
});


/**
 * add new book to database
 * @param  {Object} data book data
 * @return {Object}      sends nextwork request
 */
export const addBook = data => () => (
  axios.post(`${API}/books/donate`, data)
    .then((response) => {
      notify.success(response.data.message);
    }, (error) => {
      notify.error(error.response.data.message);
    })
    .catch((error) => {
      notify.error(error);
    })
);

