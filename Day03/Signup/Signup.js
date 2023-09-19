import { useState } from 'react';
import './Signup.css';
import Validation from '../../Component Styles/Validation';

function Signup() {
  const [error, setError] = useState({});
  const [signup, setSignup] = useState({
    username: '',
    yourname: '',
    email: '',
    mobile: '',
    password: '',
    confirm_password: '',
  });

  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignup((prevSignup) => ({
      ...prevSignup,
      [name]: value,
    }));
    setError({});
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
      console.log('Form submitted successfully!',signup);
      setSignup({username: '',
      yourname: '',
      email: '',
      mobile: '',
      password: '',
      confirm_password: ''});
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
    <div className='SignupBorder'>
      <div className='SignupLogoBox'></div>
      <div className='SignupBox'>
        <div className='SignupBoxHeader'></div>
        <form onSubmit={handleSubmit} className='SignupBoxForm'>
          {/* First step: Show first three inputs */}
          {step === 1 && (
            <>
              <div className={`SignupBoxInput input-1 ${error.yourname ? 'SignupBoxInvalidInput' : ''}`}>
                <input
                  onChange={handleChange}
                  type='text'
                  name='yourname'
                  id='yourname'
                  value={signup.yourname}
                  placeholder='Enter your name'
                />
              </div>

              <div className={`SignupBoxInput input-2 ${error.username ? 'SignupBoxInvalidInput' : ''}`}>
                <input
                  onChange={handleChange}
                  type='text'
                  name='username'
                  id='username'
                  value={signup.username}
                  placeholder='Enter the username'
                />
              </div>

              <div className={`SignupBoxInput input-3 ${error.email ? 'SignupBoxInvalidInput' : ''}`}>
                <input
                  onChange={handleChange}
                  type='text'
                  name='email'
                  id='email'
                  value={signup.email}
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
              <div className={`SignupBoxInput input-4 ${error.phonenumber ? 'SignupBoxInvalidInput' : ''}`}>
                <input
                  onChange={handleChange}
                  type='tel'
                  name='mobile'
                  id='mobile'
                  value={signup.mobile}
                  placeholder='Enter your Mobile number'
                />
              </div>

              <div className={`SignupBoxInput input-5 ${error.password ? 'SignupBoxInvalidInput' : ''}`}>
                <input
                  onChange={handleChange}
                  type='text'
                  name='password'
                  id='password'
                  value={signup.password}
                  placeholder='Enter your password'
                />
              </div>

              <div className={`SignupBoxInput input-6 ${error.confirm_password ? 'SignupBoxInvalidInput' : ''}`}>
                <input
                  onChange={handleChange}
                  type='text'
                  name='confirm_password'
                  id='confirm_password'
                  value={signup.confirm_password}
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
          {error.message && <p style={{ color: 'red' }}>{error.message}</p>}
        </form>

        <div className='SignupBoxFooter'></div>
      </div>
    </div>
  );
}

export default Signup;
