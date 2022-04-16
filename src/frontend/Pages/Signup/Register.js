import styles from "./Register.module.css";
import { useState } from "react";
import { signupCheck } from "frontend/utils/Signup";
import { useNavigate, Link } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [signupForm, setSignupForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    accept: "",
    errors: {},
    submitted: false,
    loading: false,
    formError: "",
    isValid: false,
  });

  const [passwordView, setpasswordView] = useState({
    passwordshow: false,
    confirmPasswordshow: false,
  });

  // password view  state
  const { passwordshow, confirmPasswordshow } = passwordView;

  //destructure values
  const {
    firstname,
    lastname,
    email,
    password,
    confirmPassword,
    errors,
    submitted,
    loading,
    formError,
    isValid,
  } = signupForm;

  //submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    signupCheck(setSignupForm, signupForm, navigate);
  };

  //change handler for controlled input
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setSignupForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.signup_box}>
      {/*{submitted ? (
        <>
          <div className="f-m text-thin">
            Welcome {firstname} ! you will redirect in homepage page ✈︎
          </div>
        </>
      ) : ( */}
      <form className={styles.signup_form} onSubmit={submitHandler}>
        <div className="flex flex-center">
          <img src="https://img.icons8.com/nolan/64/note.png" />
        </div>
        <div className="login-title f-m text-center">Signup</div>
        <div className="text-danger text-center">{formError ?? formError}</div>
        <div className="input-box">
          <label className="label-text ">First Name</label>
          <input
            type="text"
            className="field-item"
            name="firstname"
            value={firstname}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="input-box">
          <label className="label-text ">Last Name</label>
          <input
            type="text"
            className="field-item"
            name="lastname"
            value={lastname}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="input-box">
          <label className="label-text ">Email Address</label>
          <input
            type="email"
            className="field-item"
            name="email"
            value={email}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="input-box input-box-icon">
          <label className="label-text">Password</label>
          <input
            type={passwordshow ? "text" : "password"}
            className="field-item"
            name="password"
            value={password}
            onChange={changeHandler}
            required
          />
          <div
            className="error-icon"
            onClick={() =>
              setpasswordView((prev) => ({
                ...prev,
                passwordshow: !prev.passwordshow,
              }))
            }
          >
            <i className="fas fa-eye input-error-icon icon-gray" />
          </div>
        </div>
        <div className="input-box input-box-icon">
          <label className="label-text">Confirm Password</label>
          <input
            type={confirmPasswordshow ? "text" : "password"}
            className="field-item"
            name="confirmPassword"
            value={confirmPassword}
            onChange={changeHandler}
            required
          />
          <div
            className="error-icon"
            onClick={() =>
              setpasswordView((prev) => ({
                ...prev,
                confirmPasswordshow: !prev.confirmPasswordshow,
              }))
            }
          >
            <i className="fas fa-eye input-error-icon icon-gray" />
          </div>
          <span className="text-danger">
            {errors.password ? errors.password : null}
          </span>
        </div>
        <div className="input-box mt-m">
          <input
            type="checkbox"
            className="mr-s"
            name="accept"
            onChange={changeHandler}
            required
          />
          I accept all terms &amp; condition
        </div>
        <div className="space-between mt-m">
          <button className="btn btn-primary d-inline" type="submit">
            {loading ? "Singup ..." : "Sign Up"}
          </button>
          <button className="btn btn-primary d-inline" type="button">
            <Link to="/">Already Created Account</Link>
          </button>
        </div>
      </form>
      {/*)}*/}
    </div>
  );
};
