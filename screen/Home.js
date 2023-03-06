//import liraries
import React, { Component, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  PanResponder,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// create a component
const Home = () => {
  const navigation = useNavigation();
  const pan = useRef(new Animated.ValueXY()).current;
  const pan1 = useRef(new Animated.ValueXY()).current;

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
  const panResponder1 = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan1.x, dy: pan1.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        pan1.extractOffset();
      },
    })
  ).current;
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
        }}
        {...panResponder.panHandlers}>
        <TouchableOpacity
          style={styles.itemTouch}
          onPress={() => navigation.navigate("Music")}>
          <Text style={styles.textTitle}>Music</Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        style={{
          transform: [{ translateX: pan1.x }, { translateY: pan1.y }],
        }}
        {...panResponder1.panHandlers}>
        <TouchableOpacity
          style={styles.itemTouch}
          onPress={() => navigation.navigate("PanGesture")}>
          <Text style={styles.textTitle}>{`Pan\nGesture`}</Text>
        </TouchableOpacity>
      </Animated.View>

      <View>
        <TouchableOpacity
          style={styles.itemTouch}
          onPress={() => navigation.navigate("CategoryRow")}>
          <Text style={styles.textTitle}>{`CategoryRow`}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.itemTouch}
          onPress={() => navigation.navigate("Lucky")}>
          <Text style={styles.textTitle}>Lucky</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.itemTouch}
          onPress={() => navigation.navigate("LoginGG")}>
          <Text style={styles.textTitle}>Login gg</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  itemTouch: {
    backgroundColor: "#28b5b5",
    width: 80,
    height: 80,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textTitle: {
    textAlign: "center",
    fontFamily: "LexendDeca_600SemiBold",
    fontSize: 15,
    color: "#fff",
  },
});

//make this component available to the app
export default Home;
