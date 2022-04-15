import axios from "axios";
import { toast } from "react-toastify";
const loginCheck = async (email, password, navigate, DispatchUserAuth) => {
  try {
    const response = await axios.post(`/api/auth/login`, {
      email,
      password,
    });

    if (response.status === 200 || response.status === 201) {
      const { encodedToken, foundUser } = response.data;
      DispatchUserAuth({
        type: "LOGIN_SUCCESS",
        encodedToken: encodedToken,
        userDetails: foundUser,
      });
      localStorage.setItem("encodedToken", encodedToken);
      localStorage.setItem("Firstname", foundUser.firstName);
      toast.success("You are successfully logged in");
      navigate("/Homepage");
    }
  } catch (err) {
    toast.warning("Login failed wrong user credentials");
  }
};

const guestEntry = async (navigate, DispatchUserAuth) => {
  const response = await axios.post(`/api/auth/login`, {
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
  });

  if (response.status === 200 || response.status === 201) {
    const { encodedToken, foundUser } = response.data;
    DispatchUserAuth({
      type: "LOGIN_SUCCESS",
      encodedToken: encodedToken,
      userDetails: foundUser,
    });
    localStorage.setItem("encodedToken", encodedToken);
    localStorage.setItem("Firstname", foundUser.firstName);
    toast.success("You are successfully logged in");
    navigate("/Homepage");
  }
};

export { loginCheck, guestEntry };
