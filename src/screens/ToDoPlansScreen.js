import React, {
  useRef,
  useMemo,
  useCallback,
  useState,
  useEffect,
} from "react";
import storage from "../auth/storage";
import {
  Text,
  StyleSheet,
  View,
  Switch,
  Dimensions,
  FlatList,
} from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useDispatch, useSelector } from "react-redux";

import AppButton from "../components/AppButton";
import colors from "../config/colors";
import BottomSheet, {
  BottomSheetTextInput,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import {
  AppFormField,
  AppForm,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";
import { getNotes } from "../store/auth/userSlice";

import Note from "../components/Note";
import NoteInfo from "../components/NoteInfo";
import FormImagePicker from "../components/image/FormImagePicker";
import ImageNoData from "../components/image/ImageNoData";

function ToDoPlansScreen({ navigation }) {
  const [info, setInfo] = useState("");
  const [date, setDate] = useState(new Date());
  const [infoDone, setInfoDone] = useState([]);

  // const [title, setTitle] = useState("");
  const [needCheck, setNeedCheck] = useState(false);
  // const [description, setDescription] = useState("");
  const [isToday, setIsToday] = React.useState(false);
  const [listTodos, setLisstTodos] = useState([]);
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.user);

  useEffect(() => {
    storage.getNotes().then((res) => {
      try {
        dispatch(getNotes(res));
      } catch (error) {
        console.log(error);
      }

      console.log(res);
    });
  }, []);
  useEffect(() => {
    setInfoDone(notes);
  }, [notes]);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    description: Yup.string().required().min(1).label("Description"),
  });
  const addTodo = ({ images, title, description }, { resetForm }) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000000),
      title: title,
      description: description,
      date: date.toISOString(),
      isToday: isToday,
      check: needCheck,
      images: images,
    };
    try {
      if (listTodos) {
        dispatch(getNotes(notes.concat(newTodo)));
        storage.storeNotes(notes.concat(newTodo));
      } else {
        resetForm({});
        storage.storeNotes("notesKey", JSON.stringify([newTodo]));
      }
    } catch (e) {
      console.log(e);
    }
    handleClosePress();
    resetForm();
  };
  // ref
  const bottomSheetRef = useRef(BottomSheet);

  // variables
  const snapPoints = useMemo(() => ["83%", "95%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    bottomSheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);
  return (
    <>
      {infoDone ? (
        <Screen style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.textHeader}>Notes</Text>
            <View style={{ margin: 10 }}>
              <Text
                numberOfLines={3}
                style={{
                  fontSize: 10,
                  fontFamily: "NunitoRegular",
                  color: colors.grey,
                }}
              >
                You can add some notes for your
              </Text>
              <Text
                numberOfLines={3}
                style={{
                  fontSize: 10,
                  fontFamily: "NunitoRegular",
                  color: colors.grey,
                }}
              >
                future recipes or add your personal recipe
              </Text>
            </View>
          </View>
          <View style={{ marginBottom: 180 }}>
            {notes ? (
              <FlatList
                data={notes}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                  <Note
                    title={item.title}
                    description={item.description}
                    minutes={new Date(item.date).getMinutes()}
                    hours={new Date(item.date).getHours()}
                    uri={item.images[0]}
                    onPress={() => {
                      navigation.navigate("PlansDetailsScreen", item);
                    }}
                    onPressDelete={() => {
                      dispatch(
                        getNotes(notes.filter((note) => note.id != item.id))
                      );
                      storage.storeNotes(
                        notes.filter((note) => note.id != item.id)
                      );
                    }}
                    onPressCheck={async () => {
                      let objIndex = notes.findIndex(
                        (obj) => obj.id == item.id
                      );

                      await setInfoDone(
                        async (prev) =>
                          await prev.map(async (itemNew) => {
                            itemNew.id === item.id
                              ? { ...itemNew, check: false }
                              : itemNew;
                            console.log(
                              infoDone.map((itemNew) =>
                                itemNew.id === item.id
                                  ? { ...itemNew, check: false }
                                  : itemNew
                              )
                            );
                            setTimeout(() => {
                              dispatch(
                                getNotes(
                                  infoDone.map((itemNew) =>
                                    itemNew.id === item.id
                                      ? { ...itemNew, check: false }
                                      : itemNew
                                  )
                                )
                              );
                              storage.storeNotes(
                                infoDone.map((itemNew) =>
                                  itemNew.id === item.id
                                    ? { ...itemNew, check: false }
                                    : itemNew
                                )
                              );
                            }, 2200);
                          })
                      );
                    }}
                    checkNeed={item.check}
                    check={item.check}
                  />
                )}
                showsVerticalScrollIndicator={false}
              />
            ) : (
              <View></View>
            )}
          </View>
          <View style={{ marginTop: "auto" }}>
            <AppButton
              title="Add new note"
              borderWidth={2}
              onPress={() => handleSheetChanges(0)}
              borderColor={colors.lightSilver}
            />
          </View>
        </Screen>
      ) : (
        <ImageNoData />
      )}
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        style={{
          borderColor: colors.grey,
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
          borderWidth: 2,
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
        <View style={styles.containerAdd}>
          <Text style={styles.title}>Add a note</Text>
        </View>
        <AppForm
          initialValues={{ images: [], title: "", description: "" }}
          validationSchema={validationSchema}
          style={{ flex: 1 }}
          onSubmit={addTodo}
        >
          <View style={{ margin: 20 }}>
            <View style={{ marginLeft: Dimensions.get("window").width / 15 }}>
              <FormImagePicker name="images" />
            </View>
            <AppFormField
              placeholder="Title"
              name="title"
              autoCapitalize="sentences"
              autoCorrect={false}
            />
            <AppFormField
              placeholder="Description"
              name="description"
              autoCapitalize="none"
              autoCorrect={false}
              numberOfLines={6}
              multiline
            />

            <View
              style={[
                styles.inputContainer,
                { paddingBottom: 0, alignItems: "center" },
              ]}
            >
              <View style={{ margin: 5 }}>
                <Text style={styles.inputTitle}>Need to be checked</Text>
                <Text
                  style={{
                    color: colors.lightSilver,
                    fontSize: 12,
                    maxWidth: "84%",
                    paddingBottom: 10,
                    fontFamily: "NunitoRegular",
                  }}
                >
                  If turned on, you will need to check this note in the future
                </Text>
              </View>
              <Switch
                value={needCheck}
                onValueChange={(value) => {
                  setNeedCheck(value);
                }}
                thumbColor={colors.green}
              />
            </View>

            <SubmitButton title="Add new note" />
          </View>
        </AppForm>
      </BottomSheet>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  headerContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textHeader: {
    fontSize: 46,
    fontFamily: "NunitoRegular",
  },
  upText: {
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "NunitoRegular",
  },
  upTextConatiner: {
    margin: 15,
    alignSelf: "center",
  },
  inputTitle: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "NunitoBold",
    lineHeight: 24,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    width: "70%",
    alignSelf: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 34,
    marginBottom: 35,
    marginTop: 10,
    fontFamily: "NunitoBold",
  },
  textInput: {
    borderBottomColor: "#00000030",
    borderBottomWidth: 1,
    width: "80%",
  },
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
    paddingHorizontal: 30,
  },
  inputTitle: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 24,
  },
  inputContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: 30,
  },
  button: {
    marginTop: 30,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    height: 46,
    borderRadius: 11,
  },
  containerAdd: {
    marginTop: 15,
    marginBottom: -30,
    marginHorizontal: 15,
  },
});

export default ToDoPlansScreen;
