import { useState } from 'react';
import './Signup.css'
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();
    const [signupError, setSignupError] = useState(null);
    const [signup,setSignup] = useState(
      {
        username : "",
        yourname : "",
        email : "",
        password : ""
      }
    )
    const Signup = (e) => {
      e.preventDefault();

      const users = JSON.parse(localStorage.getItem('users')) || [];
      const isUserRegistered = users.some(
        (user) =>
          user.username === signup.username || user.email === signup.email
      );
  
      if (isUserRegistered) {
        console.log('User already registered');
        setSignupError('User already registered');
      } else {
        users.push(signup);
  
        localStorage.setItem('users', JSON.stringify(users));
  
        console.log('Registration successful');
        navigate('/');
      }
    };
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setSignup((prevSignup) => ({
        ...prevSignup,
        [name]: value
      }));
    };
    
    return (
      <div className="SignupBorder">
        <div className='SignupBox'>
          <div className='SignupBoxTop'>
            <div className='SignupBoxTitle'>
            <h2>RecipeHub</h2>
              <p>Don't Hesitate to share your Secrets of taste to us. Join Now.!
              </p>
            </div>
            <form className="SignupForm" onSubmit={Signup}>
              <input
                onChange={handleChange}
                type="text"
                name="username"
                id="input"
                placeholder="Enter the username"
                required
              />
              <input
                onChange={handleChange}
                type="text"
                name="yourname"
                id="input"
                placeholder="Enter your name"
                required
              />
              <input
                onChange={handleChange}
                type="text"
                name="email"
                id="input"
                placeholder="Enter the mail"
                required
              />
              <input
                onChange={handleChange}
                type="password"
                name="password"
                id="input"
                placeholder="Enter the password"
                required
              />
              <input
                onChange={handleChange}
                type="password"
                name="password"
                id="input"
                placeholder="Re-Enter the password"
                required
              />
              <button type="submit">Signup</button>
              {signupError && <div className="ErrorMessage">{signupError}</div>}
            </form>
          </div>
          <div className='SignupBoxBottom'>
          <p>Already have an account? <span onClick={()=>navigate("/")}>Login</span></p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Signup;
  