import { useEffect, useState, useRef } from "react";
import {
  useFonts,
  LexendDeca_100Thin,
  LexendDeca_200ExtraLight,
  LexendDeca_300Light,
  LexendDeca_400Regular,
  LexendDeca_500Medium,
  LexendDeca_600SemiBold,
  LexendDeca_700Bold,
  LexendDeca_800ExtraBold,
  LexendDeca_900Black,
} from "@expo-google-fonts/lexend-deca";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screen/Home";
import Music from "./screen/Music";
import PanGesture from "./screen/animated/PanGesture";
import CategoryRow from "./screen/CategoryRow";
import Lucky from "./screen/Lucky";
import LoginGG from "./screen/LoginGG";

const Stack = createNativeStackNavigator();
export default function App() {
  let [fontsLoaded] = useFonts({
    LexendDeca_100Thin,
    LexendDeca_200ExtraLight,
    LexendDeca_300Light,
    LexendDeca_400Regular,
    LexendDeca_500Medium,
    LexendDeca_600SemiBold,
    LexendDeca_700Bold,
    LexendDeca_800ExtraBold,
    LexendDeca_900Black,
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Music" component={Music} />
        <Stack.Screen name="PanGesture" component={PanGesture} />
        <Stack.Screen name="CategoryRow" component={CategoryRow} />
        <Stack.Screen name="Lucky" component={Lucky} />
        <Stack.Screen name="LoginGG" component={LoginGG} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
