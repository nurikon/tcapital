import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { dw } from "../../functions/developerFunc";
import styles from "./styles";

const index = ({ item, index, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.carBrandWrapper, { marginLeft: index == 0 ? dw(20) : 0 }]}
    >
      <Image source={item.image} style={styles.carBrandImg} />
    </TouchableOpacity>
  );
};

export default index;
