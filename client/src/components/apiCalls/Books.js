import axios from 'axios';
import API from '../../actions/api';



/**
 * add new book to database
 * @param  {Object} data book data
 * @return {Object}      sends nextwork request
 */
export const addBook = data => () => (
  axios.post(`${API}books/donate`, data)
    .then((response) => {
    	console.log("addBook() function is calling");
      console.log(response);
    }, (error) => {
    	    	console.log("addBook() function is calling");
      console.log(error);
    })
    .catch((error) => {
    	    	console.log("addBook() function is calling");
      console.log(error);
    })
);

