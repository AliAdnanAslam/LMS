import actionTypes from '../actions/actionTypes';


export const logoutUser = () => ({ type: actionTypes.LOGOUT });


export default () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(logoutUser());
};
