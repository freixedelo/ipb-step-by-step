import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  Button,
  TextInput,
  ActivityIndicator,
  Image,
} from "react-native";
import { HeaderAula } from "./components/HeaderAula.js";

export default class Third extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisable: true,
      buttonColor: "#135123",
      info: {},
      newLink: null,
    };
  }

  async componentDidMount() {
    console.log("asdasd", this.props.route.params);

    try {
      fetch(this.props.route.params.homeworld)
        .then((fetchResult) => fetchResult.json())
        .then((fetchResultAsJson) =>
          this.setState({ info: fetchResultAsJson })
        );
    } catch (err) {
      console.log("Error fetching data-----------", err);
    }
  }

  updateDisable = (currentStatus) => {
    this.setState({ isDisable: !currentStatus });
  };

  updateColor = () => {
    if (this.state.buttonColor === "#FF0000") {
      this.setState({ buttonColor: "#135123" });
    } else {
      this.setState({ buttonColor: "#FF0000" });
    }
  };

  render() {
    //this.setState({ newLink: this.props.route.params.homeworld });
    return (
      <View style={styles.container}>
        <HeaderAula
          title="3º Screen"
          back={true}
          navigation={this.props.navigation}
        />

        <Text>{this.state.info?.name}</Text>

        <Text>{this.state.info?.climate}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    fontSize: 36,
  },
});
