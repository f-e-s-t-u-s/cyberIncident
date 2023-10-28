import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const LoggedStatus = ({ children }) => {
  const { logged, token } = useSelector((store) => store.userInfo);
  return logged === true && token !== "" ? (
    children
  ) : (
    <Navigate
      to="/login"
      replace
      state={{ path: location.pathname }}
    ></Navigate>
  );
};
