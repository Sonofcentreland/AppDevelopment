function Validation(values) {
     let errors = {};
   
     errors.message =
       values.has('fullname') && values.get('fullname') === ''
         ? 'Your name is required'
         : values.has('username') && values.get('username') === ''
         ? 'Username is required'
         : values.has('email') && values.get('email') === ''
         ? 'Email is required'
         : !isValidEmail(values.get('email'))
         ? 'Invalid email format'
         : values.has('mobile') && values.get('mobile') === ''
         ? 'Mobile is required'
         : values.has('password') && values.get('password') === ''
         ? 'Password is required'
         : values.has('confirm_password') && values.get('confirm_password') === ''
         ? 'Confirm Password is required'
         : values.get('confirm_password') !== values.get('password')
         ? 'Passwords do not match'
         : '';
   
             errors.fullname   =  (values.has('fullname') && values.get('fullname') === '') ? true : false;
             errors.username   =  (values.has('username') && values.get('username') === '') ? true : false;
                errors.email   =  (values.has('email') && values.get('email') === '') || (values.has('email') && !isValidEmail(values.get('email'))) ? true : false;
               errors.mobile   =  (values.has('mobile') && values.get('mobile') === '') ? true : false;
             errors.password   =  (values.has('password') && values.get('password') === '') ? true : false;
     errors.confirm_password   =  (values.has('confirm_password') && values.get('confirm_password') === '') || (values.has('confirm_password') && values.get('confirm_password') !== values.get('password')) ? true : false;
     console.log(errors);
     return errors;
}
      

// Helper function to validate email format
function isValidEmail(email) {
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return emailRegex.test(email);
}


export default Validation;
