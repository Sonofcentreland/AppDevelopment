import { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(null);
    const [login,setLogin] = useState(
      {
        username : "",
        password : ""
      }
    )
    const Login = (e) => {
      e.preventDefault();
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find((user) => user.username === login.username && user.password === login.password);

      if (user) {
        console.log('Login successful');
        navigate("/home");
      } else {
        setLoginError('Invalid credentials');
      }
    };
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setLogin((prevLogin) => ({
        ...prevLogin,
        [name]: value
      }));
    };
    
    return (
      <div className="LoginBorder">
        <div className='LoginBox'>
          <div className='LoginBoxTop'>
            <div className='LoginBoxTitle'>
              <h2>RecipeHub</h2>
              <p>Start from where You left. Become a Recipe Miner now..!
              </p>
            </div>
            <form className="LoginForm" onSubmit={Login}>
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
                type="password"
                name="password"
                id="input"
                placeholder="Enter the password"
                required
              />
              <button type="submit">Login</button>
              {loginError && <div className="ErrorMessage">{loginError}</div>}
            </form>
          </div>
          <div className='LoginBoxBottom'>
            <p>Don't have an account? <span onClick={()=>navigate("/signup")}>Signup</span></p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;
  