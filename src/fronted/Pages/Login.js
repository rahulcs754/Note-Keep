import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthData } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { loginCheck, guestEntry } from "fronted/utils/Login";

export const Login = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
    viewPassword: false,
    error: "",
  });

  //Auth Context
  const { DispatchUserAuth } = useAuthData();

  // destructure login variable
  const { email, password, viewPassword, error } = login;

  // set error
  const setError = (msg) => {
    setLogin((prev) => ({
      ...prev,
      error: msg,
    }));
  };

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    loginCheck(email, password, navigate, DispatchUserAuth);
  };

  // password view
  const handlerViewPassword = () => {
    setLogin((prev) => ({ ...prev, viewPassword: !prev.viewPassword }));
  };

  // controlled input set
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  //set default entry for login
  const handlerGuestEntry = () => {
    guestEntry(navigate, DispatchUserAuth);
  };

  return (
    <div className={`flex flex-center login_box`}>
      <form className="login_form" onSubmit={submitHandler}>
        <div className="login-title f-m text-center">📓</div>
        <div className="login-title f-m text-center">Login </div>
        <div className="text-danger text-center">{error ?? error}</div>
        <div className="input-box">
          <label className="label-text ">Email Address</label>
          <input
            type="text"
            className="field-item"
            name="email"
            required
            value={email}
            onChange={changeHandler}
          />
        </div>
        <div className="input-box input-box-icon ">
          <label className="label-text">Password</label>
          <input
            type={viewPassword ? "text" : "password"}
            className="field-item"
            name="password"
            required
            value={password}
            onChange={changeHandler}
          />
          <div
            className="error-icon"
            tooltip="show"
            onClick={handlerViewPassword}
          >
            <i className="fas fa-eye input-error-icon icon-gray" />
          </div>
        </div>
        <div className="input-box mt-s">
          <input type="checkbox" className="mr-m" /> Remeber
          <a href="#"> Forgot Password</a>
        </div>
        <div className="space-between mt-s">
          <button className="btn btn-primary d-inline" type="submit">
            Log In
          </button>
          <button
            className="btn btn-primary d-inline"
            onClick={handlerGuestEntry}
            type="button"
          >
            Guest Entry
          </button>
          <button className="btn btn-primary d-inline">
            <Link to="/signup">Create New Account </Link>
          </button>
        </div>
      </form>
    </div>
  );
};
