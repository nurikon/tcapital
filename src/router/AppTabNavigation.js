import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MapScreen, HomeScreen, ScreenA, ScreenB, ScreenC } from "../screens";
import { CustomBottomBar } from "../components";

const Tab = createBottomTabNavigator();

const AppTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={"HomeScreen"}
      tabBar={(props) => <CustomBottomBar {...props} />}
      screenOptions={{
        activeTintColor: "#FF8170",
        inactiveTintColor: "#707070",
      }}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="MapScreen"
        component={MapScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="ScreenA"
        component={ScreenA}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="ScreenB"
        component={ScreenB}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="ScreenC"
        component={ScreenC}
      />
    </Tab.Navigator>
  );
};

export default AppTabNavigation;
