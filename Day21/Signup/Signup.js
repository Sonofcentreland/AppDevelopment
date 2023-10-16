import { useState } from 'react';
import './Signup.css';
import Validation from '../../Component Styles/Validation';
import CommonScreenSizes from '../../Component Styles/ComponentStyles';
import { useNavigate } from 'react-router-dom';
import { User } from '../../Library/Services/UserServices';
import { useFunctions } from '../../Library/Functions/Functions';

function Signup() {
  const navigate = useNavigate();

  const { BoxStyle } = CommonScreenSizes({ size: '1000:500' });
  const {createUser} = useFunctions();
  const [error, setError] = useState(new FormData());
  const [signup, setSignup] = useState(new User().Signup());
  
  const [step, setStep] = useState(1);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    signup.set(name,value);
     setSignup(signup);
     setError(new FormData());
  };

  const handleNextStep = () => {
    setStep(2);
  };

  const handlePrevStep = () => {
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    handleValidation(() => {
         createUser(signup);
         setSignup(new User().Signup());
         navigate("/login")
     });
  };

  const handleValidation = (onSuccess) => {
    const validationErrors = Validation(signup);
    setError(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      onSuccess();
    }
  };

  return (
    <div className='SignupBorder' style={BoxStyle}>
      <div className='SignupLogoBox'></div>
      <div className='SignupBox'>
        <div className='SignupBoxHeader'>
          <h2>Signup</h2>
          <p>Save your progress in RecipeHub</p>
        </div>
        <form onSubmit={handleSubmit} className='SignupBoxForm'>
          {step === 1 && (
            <>
              <div className={`SignupBoxInput input-1 ${error.get('name') ? 'SignupBoxInvalidInput' : ''}`}>
                <input
                  onChange={handleChange}
                  type='text'
                  name='name'
                  id='name'
                  value={signup.get('name')}
                  placeholder='Enter your name'
                />
              </div>

              <div className={`SignupBoxInput input-2 ${error.get('username') ? 'SignupBoxInvalidInput' : ''}`}>
                <input
                  onChange={handleChange}
                  type='text'
                  name='username'
                  id='username'
                  value={signup.get('username')}
                  placeholder='Enter the username'
                />
              </div>

              <div className={`SignupBoxInput input-3 ${error.get('email') ? 'SignupBoxInvalidInput' : ''}`}>
                <input
                  onChange={handleChange}
                  type='text'
                  name='email'
                  id='email'
                  value={signup.get('email')}
                  placeholder='Enter your E-mail'
                />
              </div>
               <div className='SignupBoxButton'>
                    <div className='nav-button'>
                         <button type='button' onClick={handlePrevStep}>
                              {'<'}
                         </button>
                         <button type='button' onClick={handleNextStep}>
                              {'>'}
                         </button>
                    </div>
               </div>
            </>
          )}

          {/* Second step: Show next three inputs */}
          {step === 2 && (
            <>
              <div className={`SignupBoxInput input-4 ${error.get('mobile') ? 'SignupBoxInvalidInput' : ''}`}>
                <input
                  onChange={handleChange}
                  type='tel'
                  name='mobile'
                  id='mobile'
                  value={signup.get('mobile')}
                  placeholder='Enter your Mobile number'
                />
              </div>

              <div className={`SignupBoxInput input-5 ${error.get('password') ? 'SignupBoxInvalidInput' : ''}`}>
                <input
                  onChange={handleChange}
                  type='text'
                  name='password'
                  id='password'
                  value={signup.get('password')}
                  placeholder='Enter your password'
                />
              </div>

              <div className={`SignupBoxInput input-6 ${error.get('confirm_password') ? 'SignupBoxInvalidInput' : ''}`}>
                <input
                  onChange={handleChange}
                  type='text'
                  name='confirm_password'
                  id='confirm_password'
                  value={signup.get('confirm_password')}
                  placeholder='Re-Enter your password'
                />
              </div>
               <div className='SignupBoxButton'>
                    <div className='nav-button'>
                         <button type='button' onClick={handlePrevStep}>
                              {'<'}
                         </button>
                         <button type='button' onClick={handleNextStep}>
                              {'>'}
                         </button>
                    </div>
                    <div className='signup-button'>
                         <button type='submit'>Signup</button>
                    </div>
               </div>
            </>
          )}
          {error.get('message') && 
               <div className='SignupErrorBox'>
                    <div className='errorsvg'>
                    </div>
                    <div className='errormessage'>
                         {error.get('message')}
                    </div>
               </div>
          }
                    
        </form>

        <div className='SignupBoxFooter'>
          <p>Already have an Account? <span onClick={()=>{navigate('/login')}}>&nbsp;Login</span></p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
