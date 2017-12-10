const isAuthorized = () => {
    if (localStorage.getItem('token')) {
    	return true;
    } else
    return false;
}
export default isAuthorized;
