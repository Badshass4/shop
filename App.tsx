import React from "react";
import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";

import store from "./src/state/store";
import Routes from "./src/routes/Routes";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <Routes />
      </SafeAreaView>
    </Provider>
  );
}
