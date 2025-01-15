import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../src/features/auth/authSlice";


const Login = () => {
  const initialValue = {
    email: "",
    password: "",
  }
  const [formData, setFormData] = useState(initialValue);
  const { email, password } = formData;
  
  const dispatch = useDispatch();
  
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    return setFormData(initialValue)
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="email" name="email" value={email} placeholder="email" onChange={onChange} />
      <input
        type="password"
        name="password"
        value={password}
        placeholder="password"
        onChange={onChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};
export default Login;