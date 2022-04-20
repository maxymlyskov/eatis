import { useContext } from "react";
import jwtDecode from "jwt-decode";
import { Alert } from "react-native";

import authStorage from "./storage";
import { useDispatch, useSelector } from "react-redux";
import { getUserBoolean, getUserSuccess } from "../store/auth/userSlice";

export default useAuth = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state);

  const logOut = () => {
    Alert.alert("Warning", "Are you sure you want to log out?", [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          dispatch(getUserBoolean(false));
          authStorage.removeToken();
          dispatch(getUserSuccess(null));
        },
      },
    ]);
  };

  const logIn = (authToken) => {
    const userDone = jwtDecode(authToken);
    dispatch(getUserBoolean(true));
    dispatch(getUserSuccess(userDone));
    authStorage.storeToken(authToken);
  };

  return { user, logOut, logIn };
};
