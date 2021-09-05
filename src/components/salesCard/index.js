import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { dw } from "../../functions/developerFunc";
import {
  Phone,
  Chat,
  Calender,
  Marker,
  Road,
  GasStation,
} from "../../res/assets/icons";
import colors from "../../res/style/colors";
import styles from "./styles";

const index = ({ item, lastComponent }) => {
  return (
    <View
      style={[styles.container, { marginBottom: lastComponent ? dw(30) : 0 }]}
    >
      <View style={styles.header}>
        <TouchableOpacity style={styles.profile}>
          <Image source={item.profileImage} style={styles.profileImg} />
          <View>
            <Text
              numberOfLines={1}
              ellipsizeMode={"tail"}
              style={styles.nameText}
            >
              {item.name}
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode={"tail"}
              style={styles.situation}
            >
              Şimdi
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.contact}>
          <Text
            numberOfLines={1}
            ellipsizeMode={"tail"}
            style={styles.rightText}
          >
            #{item.cardNumber}
          </Text>
          <View style={styles.iconWrapper}>
            <Chat width={dw(16)} height={dw(16)} fill={colors.white} />
          </View>
          <View style={styles.iconWrapper}>
            <Phone width={dw(13)} height={dw(16)} fill={colors.white} />
          </View>
        </View>
      </View>
      <View style={styles.carImageWrapper}>
        <Image source={item.image} style={styles.carImage} />
        <View style={styles.brandImage}>
          <Image source={item.logo} />
        </View>
      </View>
      <Text
        numberOfLines={2}
        ellipsizeMode={"tail"}
        style={styles.statementWrapper}
      >
        {item.statement}
      </Text>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomLeftContainer}>
          <View style={styles.kmContainer}>
            <Road width={dw(15)} height={dw(10)} fill={colors.passiveText} />
            <Text style={styles.bottomLeftTexts}>{item.km}</Text>
          </View>
          <View style={styles.gasContainer}>
            <GasStation width={dw(13)} height={dw(12)} fill={colors.passiveText} />
            <Text style={styles.bottomLeftTexts}>{item.fuelType}</Text>
          </View>
        </View>
        <View style={styles.bottomRightContainer}>
          <View style={styles.datePriceWrapper}>
            <View style={styles.date}>
              <Calender width={dw(11)} height={dw(12)} fill={colors.passiveText} />
              <Text style={styles.bottomLeftTexts}>2012</Text>
            </View>
            <Text style={styles.priceText}>{item.price}</Text>
            <Text style={styles.currency}>$</Text>
          </View>
          <View style={styles.locationContainer}>
            <Marker width={dw(10)} height={dw(12)}fill={colors.passiveText} />
            <Text style={styles.bottomLeftTexts}>{item.location}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default index;
