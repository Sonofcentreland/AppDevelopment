function Validation(values) {
     let errors = {};
     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
 
     const fieldValidators = {
          yourname: (val) => !val && 'Your Name is required',
          username: (val) => !val && 'Username is required',
          email: (val) => !emailPattern.test(val) && 'Invalid email format',
          mobile: (val) => !val && 'Phone number is required',
          password: (val) => !passwordPattern.test(val) && 'Invalid Password Format',
          confirm_password: (val) => val !== values.password && 'Passwords do not match'
     };
 
     Object.keys(values).forEach(field => {
          console.log(values[field]);
          console.log("in validation");
         if (values[field] !== null) {
             const errorMessage = fieldValidators[field](values[field]);
             if (errorMessage) {
                 errors.message = errorMessage;
                 errors[field] = true;
             }
         }
     });
 
     return errors;
 }
 
 export default Validation;
 