import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { register, reset } from "../../src/features/auth/authSlice";
import "./Register.scss"
import { useNavigate } from "react-router-dom"

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
  const navigate = useNavigate(); 

  const { isSuccess, message, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: "Success",
        description: message,
      });
    }
    if(isError){
      notification.error({
        message: "Error",
        description: message,
      });
    }
    dispatch(reset())
  }, [isSuccess,isError]);

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
       navigate("/")
       return setFormData(initialValue)
    }
  };
  return (
      <div className="register">
        <form className="register__form" onSubmit={onSubmit}>
          <input
            className="register__input"
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            placeholder="Name"
          />
          <input
            className="register__input"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Email"
          />
          <input
            className="register__input"
            type="date"
            name="birthday"
            value={birthday}
            onChange={onChange}
            placeholder="Birthday"
          />
          <input
            className="register__input"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Password"
          />
          <input
            className="register__input"
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            placeholder="Confirm Password"
          />
          <button className="register__button" type="submit">
            Register
          </button>
        </form>
      </div>
    )
  }
export default Register;