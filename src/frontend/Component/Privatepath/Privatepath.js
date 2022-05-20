import { useAuthData } from "../../Context";
import { Navigate, useLocation } from "react-router-dom";
export const Privatepath = ({ children }) => {
  const { userAuth } = useAuthData();
  const { isUserLoggedIn } = userAuth;
  const location = useLocation();

  return isUserLoggedIn ? (
    children
  ) : (
    <Navigate to={"/"} state={{ from: location }} replace={true} />
  );
};
