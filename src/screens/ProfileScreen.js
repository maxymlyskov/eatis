import React, {
  useState,
  useRef,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  AppFormField,
  AppForm,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import SettingsButton from "../components/SettingsButton";
import ChevronButton from "../components/ChevronButton";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import sign from "jwt-encode";

import colors from "../config/colors";
import fonts from "../styles/fonts";
import { useDispatch, useSelector } from "react-redux";
import SettingChangeButtons from "../components/SettingChangeButtons";
import { useUpdateUserMutation } from "../store/auth/authApi";
import { getUserSuccess, getWeights } from "../store/auth/userSlice";
import useAuth from "../auth/useAuth";
import BirthDateScreen from "./registration/BirthDateScreen";
import Graphics from "../components/Graphics";
import authStorage from "../auth/storage";

export default function ProfileScreen() {
  let { user, weights } = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const [opened, setOpened] = useState(false);
  const [chevron, setChevron] = useState(false);
  const [first, setFirst] = useState(user.gender);
  const [weightsCheck, setWeightCheck] = useState([]);
  const [second, setSecond] = useState(user.goal);
  const [third, setThird] = useState(user.activity);
  const [updateUser] = useUpdateUserMutation();
  const dispatch = useDispatch();
  const register = useSelector((state) => state.register.birthDate);
  const auth = useAuth();

  useEffect(() => {
    authStorage.getWeight().then((res) => {
      dispatch(getWeights(res));
    });
  }, []);

  const handleUpdateUser = async (
    goal,
    weight,
    height,
    activity,
    gender,
    name,
    birthDate
  ) => {
    try {
      await updateUser({
        id: user._id,
        goal: goal ? goal : user.goal,
        weight: weight ? weight : user.weight,
        height: height ? height : user.height,
        activity: activity ? activity : user.activity,
        gender: gender ? gender : user.gender,
        name: name ? name : user.name,
        birthDate: birthDate ? birthDate : user.birthDate,
      }).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  const dateBorn = new Date(user.birthDate);
  const dateNow = new Date();
  const years = dateNow.getFullYear() - dateBorn.getFullYear();
  // ref
  const bottomSheetRef = useRef(BottomSheet);
  const bottomSheetRefHeight = useRef(BottomSheet);
  const bottomSheetRefWeight = useRef(BottomSheet);
  const bottomSheetRefName = useRef(BottomSheet);
  const bottomSheetRefBirthDate = useRef(BottomSheet);

  // variables
  const snapPoints = useMemo(() => ["89%", "95%"], []);
  const snapPointsHeight = useMemo(() => ["40%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    setTimeout(() => {
      bottomSheetRef.current?.snapToIndex(index);
    }, 800);
  }, []);
  const handleSheetChangesHeight = useCallback((index) => {
    bottomSheetRefHeight.current?.snapToIndex(index);
  }, []);
  const handleSheetChangesWeight = useCallback((index) => {
    bottomSheetRefWeight.current?.snapToIndex(index);
  }, []);
  const handleSheetChangesBirthDate = useCallback((index) => {
    bottomSheetRefBirthDate.current?.snapToIndex(index);
  }, []);
  const handleSheetChangesName = useCallback((index) => {
    setTimeout(() => {
      bottomSheetRefName.current?.snapToIndex(index);
    }, 500);
  }, []);
  const handleClosePress = useCallback(() => {
    setTimeout(() => {
      bottomSheetRef.current?.close();
    }, 1000);
  }, []);
  const handleClosePressHeight = useCallback(() => {
    bottomSheetRefHeight.current?.close();
  }, []);
  const handleClosePressWeight = useCallback(() => {
    bottomSheetRefWeight.current?.close();
  }, []);
  const handleClosePressName = useCallback(() => {
    setTimeout(() => {
      bottomSheetRefName.current?.close();
    }, 500);
  }, []);
  const handleSetHeight = ({ height }) => {
    const userVar = {
      _id: user._id,
      activity: user.activity,
      birthDate: user.birthDate,
      email: user.email,
      gender: user.gender,
      goal: user.goal,
      height: height,
      iat: user.iat,
      name: user.name,
      weight: user.weight,
    };
    dispatch(getUserSuccess(userVar));
    handleClosePressHeight();
    setTimeout(() => {
      const newUser = sign(userVar, "jwtPrivateKey");
      auth.logIn(newUser);
      handleUpdateUser(null, null, height, null, null, null, null);
    }, 1000);
  };
  const handleSetWeight = ({ weight }) => {
    setTimeout(() => {
      const userVar = {
        _id: user._id,
        activity: user.activity,
        birthDate: user.birthDate,
        email: user.email,
        gender: user.gender,
        goal: user.goal,
        height: user.height,
        iat: user.iat,
        name: user.name,
        weight: weight,
      };
      dispatch(getUserSuccess(userVar));
      const newUser = sign(userVar, "jwtPrivateKey");
      auth.logIn(newUser);
      handleUpdateUser(null, weight, null, null, null, null, null);
    }, 100);
    handleClosePressWeight();
    let res = weights ? weights : [];
    const result = res.concat([parseInt(weight)]);
    dispatch(getWeights(result));
    setTimeout(() => {
      authStorage.storeWeight(result);
    }, 800);
  };
  const handleSetGender = (gender) => {
    const userVar = {
      _id: user._id,
      activity: user.activity,
      birthDate: user.birthDate,
      email: user.email,
      gender: gender,
      goal: user.goal,
      height: user.height,
      iat: user.iat,
      name: user.name,
      weight: user.weight,
    };
    dispatch(getUserSuccess(userVar));
    setFirst(gender);
    setTimeout(() => {
      const newUser = sign(userVar, "jwtPrivateKey");
      auth.logIn(newUser);
      handleUpdateUser(null, null, null, null, gender, null, null);
    }, 1000);
  };
  const handleSetGoal = (goal) => {
    const userVar = {
      _id: user._id,
      activity: user.activity,
      birthDate: user.birthDate,
      email: user.email,
      gender: user.gender,
      goal: goal,
      height: user.height,
      iat: user.iat,
      name: user.name,
      weight: user.weight,
    };
    dispatch(getUserSuccess(userVar));
    setSecond(goal);
    setTimeout(() => {
      const newUser = sign(userVar, "jwtPrivateKey");
      auth.logIn(newUser);
      handleUpdateUser(goal, null, null, null, null, null, null);
    }, 1000);
  };
  const handleSetActivity = (activity) => {
    const userVar = {
      _id: user._id,
      activity: activity,
      birthDate: user.birthDate,
      email: user.email,
      gender: user.gender,
      goal: user.goal,
      height: user.height,
      iat: user.iat,
      name: user.name,
      weight: user.weight,
    };
    dispatch(getUserSuccess(userVar));
    setThird(activity);
    setTimeout(() => {
      const newUser = sign(userVar, "jwtPrivateKey");
      auth.logIn(newUser);
      handleUpdateUser(null, null, null, activity, null, null, null);
    }, 1000);
  };
  const handleSetName = ({ name }) => {
    const userVar = {
      _id: user._id,
      activity: user.activity,
      birthDate: user.birthDate,
      email: user.email,
      gender: user.gender,
      goal: user.goal,
      height: user.height,
      iat: user.iat,
      name: name,
      weight: user.weight,
    };
    dispatch(getUserSuccess(userVar));
    handleClosePressName();
    setTimeout(() => {
      const newUser = sign(userVar, "jwtPrivateKey");
      auth.logIn(newUser);
      handleUpdateUser(null, null, null, null, null, name, null);
    }, 1000);
  };
  const handleSetBirthDate = () => {
    const userVar = {
      _id: user._id,
      activity: user.activity,
      birthDate: register,
      email: user.email,
      gender: user.gender,
      goal: user.goal,
      height: user.height,
      iat: user.iat,
      name: user.name,
      weight: user.weight,
    };
    dispatch(getUserSuccess(userVar));
    setTimeout(() => {
      const newUser = sign(userVar, "jwtPrivateKey");
      auth.logIn(newUser);
      handleUpdateUser(null, null, null, null, null, null, register);
    }, 1000);
  };

  const data = [
    { type: "Goal", info: user.goal },
    { type: "Gender", info: user.gender },
    { type: "Age", info: years },
    { type: "Activity", info: user.activity },
  ];

  return (
    <Screen style={{ backgroundColor: colors.green }}>
      <ScrollView>
        <View
          style={{
            padding: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <SettingsButton
            onPressAnimated={() => {
              if (!opened) {
                handleSheetChanges(0);
                setOpened(true);
              } else {
                handleClosePress();
                setOpened(false);
              }
            }}
          />
          <TouchableOpacity
            onPress={() => {
              auth.logOut();
            }}
          >
            <MaterialCommunityIcons size={22} color="white" name="logout" />
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 50,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            alignItems: "center",
            position: "relative",
            backgroundColor: "#fff",
            paddingHorizontal: 20,
          }}
        >
          <View style={{ position: "relative", width: "100%" }}>
            <View
              style={{
                position: "absolute",
                top: -50,
                left: 0,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 100,
                  height: 100,
                  borderWidth: 1,
                  borderColor: colors.grey,
                  borderRadius: 15,
                }}
              >
                <Image
                  source={require("../../assets/imgs/cookies.png")}
                  style={{ width: 100, height: "100%" }}
                />
              </View>
            </View>

            <View style={{ paddingTop: 50 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 10,
                }}
              >
                <Text style={fonts.Bold24}>{user.name}</Text>
                <ChevronButton
                  onPressAnimated={() => {
                    if (chevron) {
                      handleClosePressName();
                      setChevron(false);
                    } else {
                      handleSheetChangesName(0);
                      setChevron(true);
                    }
                  }}
                />
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, alignItems: "center" }}>
                  <Text style={fonts.Bold18}>Current height</Text>
                  <TouchableOpacity onPress={() => handleSheetChangesHeight(0)}>
                    <Text style={fonts.Bold24}>{user.height} cm</Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    borderWidth: 1,
                    borderColor: colors.grey,
                  }}
                />

                <View style={{ flex: 1, alignItems: "center" }}>
                  <Text style={fonts.Bold18}>Current weight</Text>
                  <TouchableOpacity onPress={() => handleSheetChangesWeight(0)}>
                    <Text style={fonts.Bold24}>{user.weight} kg</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Graphics dataFor={weights.length > 1 ? weights : [74, 75]} />

              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={[fonts.Bold24, { marginVertical: 20 }]}>
                    Details
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      handleSheetChangesBirthDate(0);
                    }}
                  >
                    <MaterialCommunityIcons name="calendar-edit" size={30} />
                  </TouchableOpacity>
                </View>

                {data.map((_, i) => {
                  return (
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                      key={i.toString()}
                    >
                      <Text style={fonts.Bold18}>{_.type}</Text>
                      <Text style={fonts.Regular18}>{_.info}</Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={false}
        enableGestureHandlerInteraction={true}
        onChange={handleSheetChanges}
        style={{
          borderColor: colors.grey,
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
        }}
        handleComponent={() => (
          <View style={{ alignSelf: "center" }}>
            <View
              style={{
                width: 75,
                height: 4,
                borderRadius: 3,
                backgroundColor: colors.grey,
                marginTop: 9,
              }}
            ></View>
          </View>
        )}
      >
        <BottomSheetView>
          <View style={{ alignSelf: "center", margin: 10 }}>
            <Text
              style={{
                fontFamily: "NunitoBold",
                fontSize: 25,
                color: colors.green,
              }}
            >
              Gender
            </Text>
          </View>
          <View>
            <SettingChangeButtons
              firstTitle={"Male"}
              firstColor={first === "Male" ? colors.green : "white"}
              secondColor={first === "Female" ? colors.green : "white"}
              onPressFirst={() => {
                handleSetGender("Male");
              }}
              onPressSecond={() => {
                handleSetGender("Female");
              }}
              firstColorB={first === "Male" ? "white" : colors.black}
              secondColorB={first === "Female" ? "white" : colors.black}
              borderWidth={1}
              secondTitle={"Female"}
            />
          </View>
          <View style={{ alignSelf: "center", margin: 10 }}>
            <Text
              style={{
                fontFamily: "NunitoBold",
                fontSize: 25,
                color: colors.green,
              }}
            >
              Goal
            </Text>
          </View>
          <View>
            <SettingChangeButtons
              firstTitle={"Lose weight"}
              thirdTitle={"Gain weight"}
              firstColor={second === "Lose weight" ? colors.green : "white"}
              secondColor={second === "Save weight" ? colors.green : "white"}
              thirdColor={second === "Gain weight" ? colors.green : "white"}
              onPressFirst={() => handleSetGoal("Lose weight")}
              onPressSecond={() => handleSetGoal("Save weight")}
              onPressThird={() => handleSetGoal("Gain weight")}
              firstColorB={second === "Lose weight" ? "white" : colors.black}
              secondColorB={second === "Save weight" ? "white" : colors.black}
              thirdColorB={second === "Gain weight" ? "white" : colors.black}
              borderWidth={1}
              secondTitle={"Save weight"}
            />
          </View>
          <View style={{ alignSelf: "center", margin: 10 }}>
            <Text
              style={{
                fontFamily: "NunitoBold",
                fontSize: 25,
                color: colors.green,
              }}
            >
              Activity
            </Text>
          </View>
          <View>
            <SettingChangeButtons
              firstTitle={"Low"}
              thirdTitle={"Average"}
              fourthTitle={"Above average"}
              fifthTitle={"High"}
              firstColor={third === "Low" ? colors.green : "white"}
              secondColor={third === "Below average" ? colors.green : "white"}
              thirdColor={third === "Average" ? colors.green : "white"}
              fourthColor={third === "Above average" ? colors.green : "white"}
              fifthColor={third === "High" ? colors.green : "white"}
              onPressFirst={() => handleSetActivity("Low")}
              onPressSecond={() => handleSetActivity("Below average")}
              onPressThird={() => handleSetActivity("Average")}
              onPresssFourth={() => handleSetActivity("Above average")}
              onPressFifth={() => handleSetActivity("High")}
              firstColorB={third === "Low" ? "white" : colors.black}
              secondColorB={third === "Below average" ? "white" : colors.black}
              thirdColorB={third === "Average" ? "white" : colors.black}
              fourthColorB={third === "Above average" ? "white" : colors.black}
              fifthColorB={third === "High" ? "white" : colors.black}
              borderWidth={1}
              secondTitle={"Below average"}
            />
          </View>
        </BottomSheetView>
      </BottomSheet>
      <BottomSheet
        ref={bottomSheetRefHeight}
        index={-1}
        snapPoints={snapPointsHeight}
        enablePanDownToClose={true}
        style={{
          borderColor: colors.grey,
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
          borderWidth: 1,
          overflow: "hidden",
        }}
        handleComponent={() => (
          <View style={{ alignSelf: "center" }}>
            <View
              style={{
                width: 75,
                height: 4,
                borderRadius: 3,
                backgroundColor: colors.grey,
                marginTop: 9,
              }}
            ></View>
          </View>
        )}
      >
        <BottomSheetView
          style={{ flex: 1, width: "70%", alignSelf: "center", marginTop: 20 }}
        >
          <AppForm initialValues={{ height: "" }} onSubmit={handleSetHeight}>
            <AppFormField
              placeholder="Height (cm)"
              name="height"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <View style={{ marginTop: 20 }}>
              <SubmitButton title="Change" />
            </View>
          </AppForm>
        </BottomSheetView>
      </BottomSheet>
      <BottomSheet
        ref={bottomSheetRefWeight}
        index={-1}
        snapPoints={snapPointsHeight}
        enablePanDownToClose={true}
        onClose={() => setIsOpen(false)}
        style={{
          borderColor: colors.grey,
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
          borderWidth: 1,
          overflow: "hidden",
        }}
        handleComponent={() => (
          <View style={{ alignSelf: "center" }}>
            <View
              style={{
                width: 75,
                height: 4,
                borderRadius: 3,
                backgroundColor: colors.grey,
                marginTop: 9,
              }}
            ></View>
          </View>
        )}
      >
        <BottomSheetView
          style={{ flex: 1, width: "70%", alignSelf: "center", marginTop: 20 }}
        >
          <AppForm initialValues={{ weight: "" }} onSubmit={handleSetWeight}>
            <AppFormField
              placeholder="Weight (kg)"
              name="weight"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <View style={{ marginTop: 20 }}>
              <SubmitButton title="Change" />
            </View>
          </AppForm>
        </BottomSheetView>
      </BottomSheet>
      <BottomSheet
        ref={bottomSheetRefName}
        index={-1}
        snapPoints={snapPointsHeight}
        enablePanDownToClose={false}
        style={{
          borderColor: colors.grey,
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
          borderWidth: 1,
          overflow: "hidden",
        }}
        handleComponent={() => (
          <View style={{ alignSelf: "center" }}>
            <View
              style={{
                width: 75,
                height: 4,
                borderRadius: 3,
                backgroundColor: colors.grey,
                marginTop: 9,
              }}
            ></View>
          </View>
        )}
      >
        <BottomSheetView
          style={{ flex: 1, width: "70%", alignSelf: "center", marginTop: 20 }}
        >
          <AppForm initialValues={{ name: "" }} onSubmit={handleSetName}>
            <AppFormField
              placeholder="Username"
              name="name"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <View style={{ marginTop: 20 }}>
              <SubmitButton title="Change" />
            </View>
          </AppForm>
        </BottomSheetView>
      </BottomSheet>
      <BottomSheet
        ref={bottomSheetRefBirthDate}
        index={-1}
        snapPoints={snapPointsHeight}
        enablePanDownToClose={true}
        onClose={() => setIsOpen(false)}
        style={{
          borderColor: colors.grey,
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
          borderWidth: 1,
          overflow: "hidden",
        }}
        handleComponent={() => (
          <View style={{ alignSelf: "center" }}>
            <View
              style={{
                width: 75,
                height: 4,
                borderRadius: 3,
                backgroundColor: colors.grey,
                marginTop: 9,
              }}
            ></View>
          </View>
        )}
      >
        <BottomSheetView style={{ marginTop: 70, marginHorizontal: 20 }}>
          <BirthDateScreen
            addittonalFunc={async () => {
              await handleSetBirthDate();
            }}
          />
          <View style={{ marginTop: 70, alignSelf: "center" }}>
            <Text
              style={{
                fontFamily: "NunitoRegular",
                fontSize: 16,
                color: colors.green,
              }}
            >
              Changes will automaticly set on your account
            </Text>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </Screen>
  );
}

const style = StyleSheet.create({});
