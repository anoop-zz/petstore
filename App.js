import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./app/redux/store";

import Screen from "./app/components/Screen";
import AuthNavigator from "./app/navigation/AuthNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Screen>
          <AuthNavigator />
        </Screen>
      </NavigationContainer>
    </Provider>
  );
}
