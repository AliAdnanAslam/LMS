const isAuthorized = () => {
    if (localStorage.getItem('token')) {
    	if(localStorage.getItem('token') !== "undefined") return true
    		else return false

    } else
    return false;
}
export default isAuthorized;
