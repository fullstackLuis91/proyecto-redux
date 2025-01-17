import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../src/features/auth/authSlice";
import { useNavigate } from "react-router-dom"
import "./Login.scss"

const Login = () => {
  const initialValue = {
    email: "",
    password: "",
  }
  const [formData, setFormData] = useState(initialValue);
  const { email, password } = formData;
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    navigate("/")
    return setFormData(initialValue)
  }; 
  
  return (
    <div className="login">
      <form className="login__form" onSubmit={onSubmit}>
        <div className="login__form-group">
          <label className="login__label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            className="login__input"
            placeholder="Enter your email"
            onChange={onChange}
          />
        </div>
        <div className="login__form-group">
          <label className="login__label" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            className="login__input"
            placeholder="Enter your password"
            onChange={onChange}
          />
        </div>
        <button type="submit" className="login__button">
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;