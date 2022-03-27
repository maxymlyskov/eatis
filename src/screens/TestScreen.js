import React, { useState, useRef } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useAddAuthMutation } from "../store/auth/authApi";
import useAuth from "../auth/useAuth";
import AppButton from "../components/AppButton";

function TestScreen(props) {
  const sheetRef = useRef(BottomSheet);
  const [addAuth] = useAddAuthMutation();
  const auth = useAuth();
  const [isOpen, setIsOpen] = useState(true);

  const snapPoints = ["20%"];
  const handleLogin = async () => {
    try {
      const result = await addAuth({
        email: "test1@domain.com",
        password:
          "$2b$10$beroOz9qHKjiUEHEbu1QR.SFpFUFzsrWW/IL0y56hoeRUvbYolACq",
      }).unwrap();
      console.log(result);
      auth.logIn(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose
        onClose={() => setIsOpen(false)}
      >
        <BottomSheetView style={{ backgroundColor: "green" }}>
          <AppButton onPress={() => handleLogin()} />
          <Text>hello</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "gray" },
  text: {
    fontSize: 15,
  },
});

export default TestScreen;
