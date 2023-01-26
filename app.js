//imports

import { redirectIfLoggedIn, signInUser, signupUser } from './fetch-utils.js';


//dom elemnts
const signInForm = document.getElementById('sign-in');

const signUpForm = document.getElementById('sign-up');

//state

//events

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    //used for forms to prevent reloading feature
    
    //get email and password (data) from form (values out of a form)
    const data = new FormData(signUpForm);

    //call signup futh function with email password
    await signupUser(data.get('email'), data.get('password'));

    //redirect to other page?
    window.location.href = '../other-page';
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(signInForm);
    
    await signInUser(data.get('email'), data.get('password'));
    
    window.location.href = '../other-page';

   
});

redirectIfLoggedIn();

// Fetch 
// Loop
// O pass object
// R into render function
// Append to root dom

// Wire up sign in and sign up forms to supabase
// Redirect to /other-page on successful auth
// Redirect to /other-page when page loads if user is authenticated

//display functions

//call necessary functions

// Wire up sign in and sign up forms to supabase
// Redirect to /other-page on successful auth
// Redirect to /other-page when page loads if user is authenticated
