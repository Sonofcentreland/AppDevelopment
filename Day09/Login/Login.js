import { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import CommonScreenSizes from '../../Component Styles/ComponentStyles';
import { useDispatch } from 'react-redux';
import { signin } from '../../Redux/UserSlice';
import { User } from '../../Library/Services/UserServices';
function Login() {
     const dispath = useDispatch();
     const navigate = useNavigate();
     const {BoxStyle} = CommonScreenSizes({size: '1000:500'})
     const [error, setError] = useState({});
     const [login,setLogin] = useState(new User().onLogin())
    
     const handleChange = (e) => {
        const { name, value } = e.target;
        login.set(name,value);
        setLogin(login);
        setError({});
     };
     const handleSubmit = (e) => {
          e.preventDefault();

          handleValidation(() => {
               console.log('Form submitted successfully!',login);
               dispath(signin(login));
               navigate('/dashboard');
               setLogin(new User().onLogin());
            });
     };
 
   const handleValidation = (onSuccess) => {
    //  const validationErrors = Validation(login);
    //  setError(validationErrors);
    const validationErrors = {};
     if (Object.keys(validationErrors).length === 0) {
       onSuccess();
     } 
   };
    
    return (
     <div className='LoginBorder' style={BoxStyle}>
     <div className='LoginLogoBox'></div>
     <div className='LoginBox'>
       <div className='LoginBoxHeader'>
         <h2>Login</h2>
         <p>Continue your Path in RecipeHub</p>
       </div>
       <form onSubmit={handleSubmit} className='LoginBoxForm'>
             <div className={`LoginBoxInput input-1 ${error.username ? 'LoginBoxInvalidInput' : ''}`}>
               <input
                 onChange={handleChange}
                 type='text'
                 name='username'
                 id='username'
                 value={login.get('username')}
                 placeholder='Enter your username'
               />
             </div>
             <div className={`LoginBoxInput input-1 ${error.password ? 'LoginBoxInvalidInput' : ''}`}>
               <input
                    onChange={handleChange}
                    type='password'
                    name='password'
                    id='password'
                    value={login.get('password')}
                    placeholder='Enter your password'
                    />
             </div>
              <div className='LoginBoxButton'>
                   <div className='login-button'>
                        <button type='submit'>Login</button>
                   </div>
              </div>
              {error.message && 
                    <div className='LoginErrorBox'>
                         <div className='errorsvg'>
                         </div>
                         <div className='errormessage'>
                              {error.message}
                         </div>
                    </div>
               }   
       </form>

       <div className='LoginBoxFooter'>
         <p>Don't have an Account?<span onClick={()=>{navigate('/signup')}}>&nbsp;Signup</span></p>
       </div>
     </div>
   </div>
    );
  }
  
  export default Login;
  