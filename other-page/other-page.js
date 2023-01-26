import { logout } from '../fetch-utils.js';

const buttonEl = document.getElementById('logout');
// use checkAuth function to redirect is user not authenticated

// add event listener to the logout button and call logout
buttonEl.addEventListener('click', () => {
    //take user back to log in page
    window.location.href = '../';
    logout();
});
