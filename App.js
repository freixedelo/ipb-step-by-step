import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Homescreen from "./screens/Home.js";
import Second from "./screens/Second.js";

const Stack = createStackNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode="none">
          <Stack.Screen
            name="Home"
            component={Homescreen}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen name="Second" component={Second} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
