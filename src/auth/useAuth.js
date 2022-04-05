import { useContext } from "react";
import jwtDecode from "jwt-decode";
import authStorage from "./storage";
import { useDispatch, useSelector } from "react-redux";
import { getUserBoolean, getUserSuccess } from "../store/auth/userSlice";

export default useAuth = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state);

  const logOut = () => {
    dispatch(getUserSuccess(null));
    dispatch(getUserBoolean(false));
    authStorage.removeToken();
    console.log(user);
  };

  const logIn = (authToken) => {
    const userDone = jwtDecode(authToken);
    dispatch(getUserBoolean(true));
    dispatch(getUserSuccess(userDone));
    authStorage.storeToken(authToken);
    console.log(user);
  };

  return { user, logOut, logIn };
};
