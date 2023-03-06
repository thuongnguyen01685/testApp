//import liraries
import React, { Component, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import WheelOfFortune from "react-native-wheel-of-fortune-dp";

// create a component
const rewards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Lucky = () => {
  const [winnerValue, setWinnerValue] = useState(null);
  const [winnerIndex, setWinnerIndex] = useState(null);
  const [started, setStarted] = useState(false);

  const [child, setChild] = useState(null);

  const wheelOptions = {
    rewards: rewards,
    knobSize: 30,
    borderWidth: 5,
    borderColor: "#fff",
    innerRadius: 30,
    duration: 4000,
    backgroundColor: "transparent",
    textAngle: "horizontal",
    knobSource: require("../assets/img/knob.png"),
    onRef: (ref) => {
      setChild(ref);
    },
  };

  const buttonPress = () => {
    setStarted(true);
    child._onPress();
  };

  return (
    <View style={styles.container}>
      <View
        style={{ marginVertical: 20, alignSelf: "center", marginBottom: 50 }}>
        <Text style={{ color: "#fff", fontSize: 20 }}>
          Vòng quay may mắn - 2023
        </Text>
      </View>

      <WheelOfFortune
        options={wheelOptions}
        getWinner={(value, index) => {
          setWinnerValue(value);
          setWinnerIndex(index);
        }}
      />
      {!started && (
        <View style={styles.startButtonView}>
          <TouchableOpacity
            onPress={() => buttonPress()}
            style={styles.startButton}>
            <Text style={styles.startButtonText}>Quay</Text>
          </TouchableOpacity>
        </View>
      )}
      {winnerIndex != null && (
        <View style={styles.winnerView}>
          <Text style={styles.winnerText}>You win {rewards[winnerIndex]}</Text>
          <TouchableOpacity
            onPress={() => {
              setWinnerIndex(null);
              child._tryAgain();
            }}
            style={styles.tryAgainButton}>
            <Text style={styles.tryAgainText}>Quay tiếp</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  startButtonView: {
    position: "absolute",
  },
  startButton: {
    backgroundColor: "rgba(0,0,0,.5)",
    marginTop: 50,
    padding: 5,
  },
  startButtonText: {
    fontSize: 50,
    color: "#fff",
    fontWeight: "bold",
  },
  winnerView: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  tryAgainButton: {
    padding: 10,
  },
  winnerText: {
    fontSize: 30,
  },
  tryAgainButton: {
    padding: 5,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  tryAgainText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});

//make this component available to the app
export default Lucky;
