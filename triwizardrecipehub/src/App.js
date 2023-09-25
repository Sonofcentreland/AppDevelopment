import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Accounts from './Layout/Accounts/Accounts';
import { Functions } from './Library/Functions/Functions';
import Terms from './Components/Terms/Terms';
import AboutUs from './Components/AboutUs/AboutUs';
import Faq from './Components/Faq/Faq';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Functions>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/accounts" element={<Accounts/>} />
            <Route path="/terms" element={<Terms/>} />
            <Route path="/about-us" element={<AboutUs/>} />
            <Route path="/faq" element={<Faq/>} />
          </Routes>
        </Functions>
      </BrowserRouter>
    </div>
  );
}

export default App;