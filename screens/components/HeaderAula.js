import React from "react";
import { Text, Image } from "react-native";
import { Header } from "react-native-elements";

export const HeaderAula = (prop) => (
  <Header
    leftComponent={
      prop.back && <Text onPress={() => prop.navigation.goBack()}>back</Text>
    }
    centerComponent={<Text style={{ fontSize: 20 }}>{prop.title}</Text>}
    rightComponent={
      <Image
        style={{ width: 35, height: 35 }}
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
      />
    }
  />
);

export const ButtonAula = () => {};
