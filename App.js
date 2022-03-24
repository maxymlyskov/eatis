import React from "react";

import { Provider } from "react-redux";
import AppNavigator from "./src/routes/AppNavigator";

import { store } from "./src/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
