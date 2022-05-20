export const AuthReducer = (state, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case "REQUEST_LOGIN":
      return {
        ...state,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        message: "",
        isUserLoggedIn: true,
        encodedToken: action.encodedToken,
        archives: action.userDetails.archives,
        notes: action.userDetails.notes,
      };
    case "LOGOUT":
      localStorage.clear("rsnote_encodedToken");
      localStorage.clear("rsnote_Firstname");

      return {
        ...state,
        loading: false,
        message: "",
        isUserLoggedIn: false,
        encodedToken: "",
        userDetails: {},
      };

    case "LOGIN_ERROR":
      return {
        ...state,
        loading: false,
        message: error,
      };

    case "SET_NOTES":
      return { ...state, notes: payload };

    case "UPDATE_TRASH":
      return { ...state, trash: [...state.trash, payload] };

    case "SET_ARCHIVES":
      return { ...state, archives: payload };

    case "REMOVE_FROM_TRASH":
      return {
        ...state,
        trash: state.trash.filter((item) => item._id !== payload),
      };
    default:
      return state;
  }
};
