import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

import jwtDecode from "jwt-decode";

const key = "authToken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Cant store it", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Cant get it", error);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Cant delete it", error);
  }
};
const removeWeights = async () => {
  try {
    await AsyncStorage.removeItem("weightKey");
  } catch (error) {
    console.log("Cant delete it", error);
  }
};
const removeNotes = async () => {
  try {
    await AsyncStorage.removeItem("notesKey");
  } catch (error) {
    console.log("Cant delete it", error);
  }
};
const removeEaten = async () => {
  try {
    await AsyncStorage.removeItem("eatenKey");
  } catch (error) {
    console.log("Cant delete it", error);
  }
};
const getWeight = async () => {
  let weightKey = await AsyncStorage.getItem("weightKey");
  let parsed = JSON.parse(weightKey);
  console.log(parsed);
  return parsed;
};
const getNotes = async () => {
  let weightKey = await AsyncStorage.getItem("notesKey");
  let parsed = JSON.parse(weightKey);
  console.log(parsed);
  return parsed;
};
const storeWeight = async (value) => {
  try {
    await AsyncStorage.setItem("weightKey", JSON.stringify(value));
  } catch (e) {
    // saving error
    console.log(e);
  }
};
const storeNotes = async (value) => {
  try {
    await AsyncStorage.setItem("notesKey", JSON.stringify(value));
  } catch (e) {
    // saving error
    console.log(e);
  }
};
const getEaten = async () => {
  try {
    let eatenKey = await AsyncStorage.getItem("eatenKey");
    let parsed = JSON.parse(eatenKey);
    return parsed;
  } catch (error) {
    console.log(error);
  }
};
const getData = async () => {
  try {
    let dataKey = await AsyncStorage.getItem("dataKey");
    let parsedData = JSON.parse(dataKey);
    console.log(parsedData);
    return parsedData;
  } catch (error) {
    console.log(error);
  }
};
const storeEaten = async (value) => {
  try {
    await AsyncStorage.setItem("eatenKey", JSON.stringify(value));
    await AsyncStorage.setItem("dataKey", JSON.stringify(new Date().getDate()));
  } catch (e) {
    // saving error
    console.log(e);
  }
};
export default {
  getUser,
  getToken,
  removeToken,
  storeToken,
  getWeight,
  storeWeight,
  removeWeights,
  getNotes,
  storeNotes,
  removeNotes,
  getEaten,
  getData,
  storeEaten,
  removeEaten,
};
