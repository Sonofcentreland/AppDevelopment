function Validation(values) {
     let errors = {};
     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

     const allFieldsEmptyOrNull = Object.values(values).every(value => value === null || value === "");
     
     if (allFieldsEmptyOrNull) {
          errors.message = "Please fill all required fields";
          errors.yourname = true;
          errors.username = true;
          errors.email = true;
          errors.mobile = true;
          errors.password = true;
          errors.confirm_password = true;
     } else {
          if (!values.confirm_password) {
               errors.message = "Please confirm your password";
               errors.confirm_password = true;
          } else if (values.confirm_password.trim() !== values.password.trim()) {
               errors.message = "Passwords do not match";
               errors.confirm_password = true;
          }
          
          if (!values.password) {
               errors.message = "Password is required";
               errors.password = true;
          } else if (!passwordPattern.test(values.password)) {
               errors.message = "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, and one digit.";
               errors.password = true;
          }
          
          
          if (!values.mobile) {
               errors.message = "Phone number is required";
               errors.mobile = true;
          }
          
          if (!values.email) {
               errors.message = "Email is required";
               errors.email = true;
          } else if (!emailPattern.test(values.email)) {
               errors.message = "Invalid email format";
               errors.email = true;
          }

          if (!values.username) {
               errors.message = "Username is required";
               errors.username = true;
          }
     
          if (!values.yourname) {
               errors.message = "Your Name is required";
               errors.yourname = true;
          }
          
     }
     return errors;
}
   
export default Validation;