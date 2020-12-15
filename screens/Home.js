import React, { Component } from "react";
import { Button, View, Text, StyleSheet, ScrollView } from "react-native";
import { Input, Header } from "react-native-elements";
import { HeaderAula, ButtonAula } from "./components/HeaderAula.js";

const titles = () => (
  <>
    <Text>Title</Text>
    <Text>Subtitle</Text>
  </>
);

export default class Home extends Component {
  render() {
    console.log("props class", this.props);
    return (
      <ScrollView style={{ flex: 1 }}>
        <HeaderAula title="1º Ecrã" color="#123897" />

        {titles()}
        <View style={styles.viewRed}></View>
        <View style={styles.viewBlue}>
          <Text style={{ fontSize: 20, color: "#fff" }}>TEXTO TESTE</Text>
        </View>

        <Text>OLA AULA 5!</Text>
        <Input
          placeholder="INPUT WITH ICON"
          leftIcon={{ type: "font-awesome", name: "thumbs-up" }}
        />

        <Button
          title="Navegar 2º Ecrã"
          onPress={() => this.props.navigation.navigate("Second")}
        ></Button>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  viewRed: {
    height: 150,
    backgroundColor: "red",
    padding: 20,
  },
  viewBlue: {
    height: 150,
    backgroundColor: "blue",
    borderRadius: 20,
    borderColor: "green",
    borderWidth: 10,
  },
});
