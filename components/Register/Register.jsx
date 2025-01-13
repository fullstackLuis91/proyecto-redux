import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { notification } from "antd";
import { register } from "../../src/features/auth/authSlice";

const Register = () => {
  const initialValue = {
    name: "",
    email: "",
    birthday: "",
    password: "",
    password2: "",
  }
  const [formData, setFormData] = useState(initialValue);
  const { name, email, birthday, password, password2 } = formData;
 
  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    
    if (password !== password2) {
      return notification.error({
        message: "Error",
        description: "Passwords do not match",
      });
    } else {
       dispatch(register(formData));
       return setFormData(initialValue)
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="Email"
      />
      <input
        type="date"
        name="birthday"
        value={birthday}
        onChange={onChange}
        placeholder="Birthday"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="Password"
      />
      <input
        type="password"
        name="password2"
        value={password2}
        onChange={onChange}
        placeholder="Password 2"
      />
      <button type="submit">Register</button>
    </form>
  );
};
export default Register;