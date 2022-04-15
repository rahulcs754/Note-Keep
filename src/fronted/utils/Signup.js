import axios from "axios";
import { toast } from "react-toastify";

export const signupCheck = async (setSignupForm, signupForm, navigate) => {
  setSignupForm((prev) => ({ ...prev, loading: true }));

  const { firstname, lastname, email, password, confirmPassword } = signupForm;
  if (password === confirmPassword) {
    setSignupForm((prev) => ({
      ...prev,
      loading: false,
      errors: {},
    }));
    const countError = Object.keys(signupForm.errors).length;
    if (countError === 0 && signupForm.accept === "on") {
      setSignupForm((prev) => ({
        ...prev,
        submitted: true,
        loading: false,
      }));

      try {
        const response = await axios.post(`/api/auth/signup`, {
          firstName: firstname,
          lastName: lastname,
          email: email,
          password: password,
        });
        // saving the encodedToken in the localStorage
        if (response.status === 201 || response.status === 200) {
          setSignupForm((prev) => ({
            ...prev,
            isValid: true,
          }));
          localStorage.setItem("token", response.data.encodedToken);
          setTimeout(() => {
            navigate("/");
          }, 3000);
        } else if (response.status === 500) {
          toast.warning("Oops Something went wrong");
        } else if (response.status === 422) {
          toast.warning("User Already Exits");
        }
      } catch (error) {
        setSignupForm((prev) => ({
          ...prev,
          loading: false,
          formErrors: error,
        }));
      }
    } else {
      setSignupForm((prev) => ({
        ...prev,
        submitted: false,
        loading: false,
      }));
    }
  } else {
    toast.warning("Password Must be equal");
  }
};
