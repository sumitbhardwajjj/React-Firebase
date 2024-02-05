import React, { useState } from "react";
import "./Signup.css";
import { app } from './firebase';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import {Link,useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';

const auth = getAuth(app)

const Login = () => {

  const navigate = useNavigate()

  const loginUser = () =>{
    signInWithEmailAndPassword(auth, formData.email, formData.password)
    .then(()=>toast.success("success"))
    .catch((err)=>toast.error(err))
  }


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "", // Clear validation errors when the input changes
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
      isValid = false;
    }

    // Password validation using custom regex
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!formData.password || !passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters with at least one uppercase letter, one lowercase letter, one digit, and one special character";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    loginUser()

   setTimeout(() => {
    navigate('/home')
   }, 3000);
  }

  return (
    <div className="login-form">
      <form className="form" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="error">{errors.email}</span>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <span className="error">{errors.password}</span>}
        <Link className="lin" to="/sign">
          <div>
            New user? <span>Register</span>
          </div>
        </Link>
        <button className="Button" type="submit">
          Login
        </button>
      </form>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </div>
  );
};

export default Login;
