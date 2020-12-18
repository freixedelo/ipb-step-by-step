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
  TouchableHighlight,
} from "react-native";
import { HeaderAula } from "./components/HeaderAula.js";

export default class Second extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisable: true,
      buttonColor: "#135123",
      listOfPeople: [],
    };
  }

  async componentDidMount() {
    try {
      fetch("https://swapi.dev/api/people/")
        .then((fetchResult) => fetchResult.json())
        .then((fetchResultAsJson) =>
          this.setState({ listOfPeople: fetchResultAsJson.results })
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
    if (this.state.listOfPeople.length === 0) {
      console.log("NÂO TEMOS DADOS NO ARRAY", this.state.listOfPeople);
      return (
        <View>
          <Text>Estou esperando por melhores dias</Text>
        </View>
      );
    } else {
      console.log("Funciona", this.state.listOfPeople);
      return (
        <View style={styles.container}>
          <HeaderAula
            title="2º Screen"
            back={true}
            navigation={this.props.navigation}
          />
          <ActivityIndicator color="#FF0000" size={60} />

          <Text style={{ color: "#555000", fontSize: 30 }}>Aula de PAM!</Text>

          <Image
            style={{
              width: 325,
              height: 50,
            }}
            source={{
              uri:
                "https://estig.ipb.pt//templates/estig-template-home/images/logo.png",
            }}
          />

          <Text>Aula de PAM! #2</Text>
          <View>
            <FlatList
              data={this.state.listOfPeople}
              keyExtractor={(item) => item.index}
              renderItem={({ item }) => {
                console.log(item);
                return (
                  <TouchableHighlight
                    onPress={() =>
                      this.props.navigation.navigate("Third", {
                        homeworld: item.homeworld,
                      })
                    }
                    style={{ backgroundColor: "#fff123" }}
                  >
                    <View>
                      <Text>{item.name}</Text>
                      <Text style={{ fontSize: 10 }}>{item.gender}</Text>
                    </View>
                  </TouchableHighlight>
                );
              }}
            />
          </View>
          <TextInput
            style={{
              color: "#135123",
              fontSize: 30,
              borderColor: "gray",
              borderWidth: 1,
            }}
            placeholder="E-mail"
          />
          <Button
            onPress={() => this.updateDisable(this.state.isDisable)}
            title={"Enable/Disable"}
            color={this.state.buttonColor}
          />
          <Button
            onPress={() => this.updateColor()}
            title={"mudar cor"}
            disabled={this.state.isDisable}
          />
          <Button
            onPress={() => this.updateColor()}
            title={"mudar cor"}
            disabled={this.state.isDisable}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
