import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { dw } from "../../functions/developerFunc";
import {
  TabbarCar,
  Buyer,
  Camera,
  Chats,
  Search,
} from "../../res/assets/icons";
import colors from "../../res/style/colors";
import styles from "./styles";

const index = ({ state, descriptors, navigation }) => {
  const { tabGlobal, tabItem, buyerContainer, buyerText } = styles;

  return (
    <View style={tabGlobal}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <TouchableOpacity
            key={label}
            style={{
              flex: 1,
            }}
            onPress={onPress}
          >
            {label === "HomeScreen" && (
              <View style={tabItem}>
                <TabbarCar
                  width={dw(23)}
                  height={dw(18)}
                  fill={isFocused ? colors.orange : colors.passiveText}
                />
              </View>
            )}

            {label === "MapScreen" && (
              <View style={buyerContainer}>
                <Buyer width={dw(20)} height={dw(18)} fill={colors.white} />
                <Text style={buyerText}>Alıcı Ol</Text>
              </View>
            )}
            {label === "ScreenA" && (
              <View style={tabItem}>
                <Camera
                  width={dw(22)}
                  height={dw(20)}
                  fill={isFocused ? colors.orange : colors.passiveText}
                />
              </View>
            )}
            {label === "ScreenB" && (
              <View style={tabItem}>
                <Chats
                  height={dw(21)} //21
                  width={dw(20)}
                  fill={isFocused ? colors.orange : colors.passiveText}
                />
              </View>
            )}
            {label === "ScreenC" && (
              <View style={tabItem}>
                <Image
                style={styles.profileImg}
                  source={require("../../res/assets/images/profil1.png")}
                />
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default index;

// import React from 'react'
// import { View, Text } from 'react-native'

// const index = () => {
//   return (
//     <View>
//       <Text>custom tab bar</Text>
//     </View>
//   )
// }

// export default index
