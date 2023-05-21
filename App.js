import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./app/redux/store";

import Screen from "./app/components/Screen";
import DrawerNavigator from "./app/navigation/Navigator";
import AuthNavigator from "./app/navigation/AuthNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Screen>
          <DrawerNavigator />
        </Screen>
      </NavigationContainer>
    </Provider>
  );
}
