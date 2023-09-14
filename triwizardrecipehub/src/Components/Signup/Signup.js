import { useState } from 'react';
import './Signup.css'
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();
    const [signup,setSignup] = useState(
      {
        username : "",
        password : ""
      }
    )
    const Signup = (e) => {
      e.preventDefault();
      console.log("Logging in with username:", signup.username);
      console.log("Password:", signup.password);
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
            <p>Welcome to </p><h2>RecipeHub</h2>
              <p>Join us, So you can never miss any updates
                and create your own recipe.
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
              <button type="submit">Signup</button>
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
  