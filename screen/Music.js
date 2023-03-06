import { StatusBar } from "expo-status-bar";

import {
  Button,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Easing,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Audio, Video } from "expo-av";
import MarqueeText from "react-native-marquee";
import { useEffect, useState, useRef } from "react";

import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
export default function Music() {
  const [sound, setSound] = useState();

  const [play, setPlay] = useState(false);

  const value = useRef(new Animated.Value(0)).current;

  async function playSound() {
    setPlay(!play);
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/music/elkdt.mp3")
    );

    setSound(sound);

    if (play) {
      await sound.stopAsync();
    } else {
      await sound.playAsync();
    }
  }

  useEffect(() => {
    Animated.loop(
      Animated.timing(value, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const rotation = value.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <View style={{ marginVertical: 20 }}>
        <Image
          source={require("../assets/img/avt.jpg")}
          style={{
            width: width * 0.9,
            height: width * 0.9,
            borderRadius: 1000,
          }}
        />
      </View>

      <View style={styles.viewName}>
        <Animated.View
          style={[styles.viewCircle, { transform: [{ rotate: rotation }] }]}>
          <Image
            source={require("../assets/img/avt.jpg")}
            style={{
              resizeMode: "contain",
              width: 40,
              height: 40,
              borderRadius: 20,
            }}
          />
        </Animated.View>
        <MarqueeText
          style={{
            fontSize: 20,
            color: "#fff",
            fontFamily: "LexendDeca_500Medium",

            paddingLeft: 15,
          }}
          speed={1}
          marqueeOnStart={true}
          loop={true}
          delay={1000}>
          Em là kẻ đáng thương - ThươngMtp
        </MarqueeText>
      </View>
      <TouchableOpacity onPress={playSound}>
        {play ? (
          <Ionicons name="pause-outline" size={30} color="#fff" />
        ) : (
          <Ionicons name="play-outline" size={30} color="#fff" />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#170f23",
    alignItems: "center",
    justifyContent: "center",
  },
  viewName: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  viewCircle: {
    backgroundColor: "#9b4de0",
    borderRadius: 20,
  },
});
