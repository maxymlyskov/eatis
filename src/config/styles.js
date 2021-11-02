import { Platform } from "react-native";
import colors from "./colors";

export default {
  colors,
  text: {
    fontSize: 40,
    color: colors.white,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
