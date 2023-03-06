//import liraries
import React, { Component, useRef } from "react";
import { View, Text, StyleSheet, Animated, PanResponder } from "react-native";

import { StatusBar } from "expo-status-bar";

// create a component
const PanGesture = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        pan.extractOffset();
      },
    })
  ).current;
  return (
    <>
      <Text>Pan Gesture Handler</Text>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
        }}
        {...panResponder.panHandlers}>
        <View style={styles.square} />
      </Animated.View>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  square: {
    width: 150,
    height: 150,
    backgroundColor: "#28b5b5",
    marginTop: 22,
  },
});

//make this component available to the app
export default PanGesture;
