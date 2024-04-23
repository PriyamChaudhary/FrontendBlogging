const toggle = document.querySelector('.nav-bar #nav-toggle');
const nav = document.querySelectorAll('.nav-bar .nav-collaps');
toggle.addEventListener('click',function(){
   nav.forEach(col=>col.classList.toggle('nav-collaps-show'))
})
//form validation
document.addEventListener('DOMContentLoaded', function () {
   // Get the forms
   const signupForm = document.getElementById('signupForm');
   const loginForm = document.getElementById('loginForm');
 
   signupForm.addEventListener('submit', function (event) {
     event.preventDefault(); // Prevent default form submission
     if (validateSignupForm()) {
       // If validation passes, show success message and submit the form
       this.submit();
     }
   });
   loginForm.addEventListener('submit', function (event) {
     event.preventDefault(); 
     if (validateLoginForm()) {
       // If validation passes, show success message and submit the form
       this.submit();
     }
   });
 
   // Validation functions
   function validateSignupForm() {
     const username = document.getElementById('username').value;
     const email = document.getElementById('signupEmail').value;
     const password = document.getElementById('signupPassword').value;
 
     // For example, check if fields are empty or if email format is valid
     if (!username.trim()) {
       alert('Please enter a username.');
       return false;
     }
 
     if (!email.trim()) {
       alert('Please enter an email.');
       return false;
     }
 
     if (!isValidEmail(email)) {
       alert('Please enter a valid email address.');
       return false;
     }
 
     if (!password.trim()) {
       alert('Please enter a password.');
       return false;
     }
 
     return true;
   }
 
   function validateLoginForm() {
     const email = document.getElementById('loginEmail').value;
     const password = document.getElementById('loginPassword').value;
     if (!email.trim()) {
       alert('Please enter an email.');
       return false;
     }
 
     if (!isValidEmail(email)) {
       alert('Please enter a valid email address.');
       return false;
     }
 
     if (!password.trim()) {
       alert('Please enter a password.');
       return false;
     }
 
     return true;
   }
 
   function isValidEmail(email) {
     // Regular expression to validate email format
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return emailRegex.test(email);
   }
 });
 