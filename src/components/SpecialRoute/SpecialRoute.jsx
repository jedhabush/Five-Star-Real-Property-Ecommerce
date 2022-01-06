import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../../hooks/useAuthStatus";
import Spinner from "../Spinner";

const SpecialRoute = () => {
  const { loggedIn, loadingStatus } = useAuthStatus();

  if (loadingStatus) {
    return <Spinner />;
  }

  /* it returns a condtion if user is logged in then direct to profile otherwise
  navigate to sign in page in this case it is the child element and we do this using Outlet*/
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default SpecialRoute;

/*The main purpose of this SpecialRoute component is to make sure the user access certain pages 
unless user is already logged in PLUS react renders the component before getting the usre data from the dataBase (firebase) and that 
in return crashes the site */
