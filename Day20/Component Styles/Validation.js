function Validation(values) {
     
     const Errors = new FormData();

     (           values.has('name') && values.get('name') === ''             )      ?      Errors.append(     'message', 'Your Name is required'      )         :
     (       values.has('username') && values.get('username') === ''         )      ?      Errors.append(      'message', 'Username is required'      )         :
     (           values.has('email') && values.get('email') === ''           )      ?      Errors.append(        'message', 'Email is required'       )         :
     (      values.has('email') && !isValidEmail(values.get('email'))        )      ?      Errors.append(     'message', 'Invalid email format'       )         :
     (          values.has('mobile') && values.get('mobile') === ''          )      ?      Errors.append(      'message', 'Mobile is required'        )         :
     (       values.has('password') && values.get('password') === ''         )      ?      Errors.append(      'message', 'Password is required'      )         :
     (values.has('confirm_password') && values.get('confirm_password') === '')      ?      Errors.append(  'message', 'Confirm Password is required'  )         :
     (values.has('confirm_password') && values.get('confirm_password') 
                                                   !== values.get('password'))      ?      Errors.append(     'message', 'Passwords do not match'     )         :
     console.log();


   
                              (values.has('name') && values.get('name') === '')     ?      Errors.append('name', (values.has('name') && values.get('name') === '') ? true : false)                 : console.log();
                      (values.has('username') && values.get('username') === '')     ?      Errors.append('username', (values.has('username') && values.get('username') === '') ? true : false)     : console.log();
                            (values.has('email') && values.get('email') === '')     ?      Errors.append('email', (values.has('email') && values.get('email') === '') ? true : false)              : console.log();
                    (values.has('email') && !isValidEmail(values.get('email')))     ?      Errors.append('email', (values.has('email') && !isValidEmail(values.get('email'))) ?true : false)       : console.log();
                          (values.has('mobile') && values.get('mobile') === '')     ?      Errors.append('mobile', (values.has('mobile') && values.get('mobile') === '') ? true : false)           : console.log();
                      (values.has('password') && values.get('password') === '')     ?      Errors.append('password',(values.has('password') && values.get('password') === '') ? true : false)      : console.log();
     (values.has('confirm_password') && values.get('confirm_password')  === '')     ?      Errors.append('confirm_password',(values.has('confirm_password') && 
                                                                                                                                       values.get('confirm_password') === '') ? true : false)      : console.log();
     (values.has('confirm_password') && values.get('confirm_password') 
                                                    !== values.get('password'))     ?      Errors.append('confirm_password',(values.has('confirm_password') && 
                                                                                                              values.get('confirm_password')!== values.get('password')) ? true : false)            : console.log();
     console.log(Errors.get('message'));
     
     return Errors;
}
      

// Helper function to validate email format
function isValidEmail(email) {
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return emailRegex.test(email);
}


export default Validation;
