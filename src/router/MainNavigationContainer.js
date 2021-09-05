import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "../functions/routerFunc";
import AppTabNavigation from "./AppTabNavigation";

const MainNavigationContainer = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppTabNavigation />
    </NavigationContainer>
  );
};

export default MainNavigationContainer;
