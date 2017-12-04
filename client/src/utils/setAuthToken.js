import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-access-token'] = token;
  }
};

export default setAuthToken;
