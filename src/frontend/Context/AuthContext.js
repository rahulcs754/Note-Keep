import { createContext, useContext, useState, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";
import { v4 as uuid } from "uuid";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const intialValue = {
    isUserLoggedIn: false,
    encodedToken: "",
    userDetails: {},
    archives: [],
    notes: [],
    trash: [],
    loading: false,
    message: null,
  };

  const [userAuth, DispatchUserAuth] = useReducer(AuthReducer, intialValue);

  const intialNotes = {
    _id: uuid(),
    title: "",
    description: "",
    color: "#ffffff",
    isEdited: false,
    isPinned: false,
    label: "Home",
    timestamp: new Date().toLocaleString(),
    priority: "Low",
  };

  const [note, setNote] = useState(intialNotes);

  return (
    <AuthContext.Provider
      value={{ userAuth, DispatchUserAuth, note, setNote, intialNotes }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthData = () => useContext(AuthContext);

export { useAuthData, AuthProvider };
