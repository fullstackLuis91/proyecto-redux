import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../src/features/auth/authSlice";
import './Header.scss'

const Header = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    navigate("/login")
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <Link className="header__link" to="/">
          Home
        </Link>
        <span className="header__separator">/</span>
        {user ? (
          <>
            <Link className="header__link" to="/profile">
              {user.name}
            </Link>
            <Button className="header__button" onClick={onLogout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link className="header__link" to="/login">
              Login
            </Link>
            <span className="header__separator">/</span>
            <Link className="header__link" to="/register">
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;