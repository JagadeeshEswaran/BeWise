import { useAppAuth } from "./AppContext/AuthContext";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element, ...rest }) => {
  const { isLoggedIn } = useAppAuth();

  return (
    <>
      {isLoggedIn ? (
        <Route {...rest} element={element} />
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default PrivateRoute;
