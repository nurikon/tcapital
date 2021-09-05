import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { dw } from "../../functions/developerFunc";
import { headerImages } from "../../res/assets/sampleData";
import colors from "../../res/style/colors";
import { Left, Edit, Add } from "../../res/assets/icons";
import styles from "./styles";

const Header = ({
  centerTitle,
  centerIsPopulerBuyers,
  righTitle,
  addOnPress,
  editOnPress,
  righTitleOnPress,
  backButtonOnPress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={backButtonOnPress}
        style={styles.leftContainer}
      >
        <Left width={dw(8)} height={dw(14)} fill={colors.white} />
      </TouchableOpacity>
      {centerTitle ? (
        <View style={styles.centerContainer}>
          <Text style={styles.centerTitle}>{centerTitle}</Text>
        </View>
      ) : centerIsPopulerBuyers ? (
        <View
          style={[
            styles.centerContainer,
            { width: dw(150 + headerImages.length * 17) },
          ]}
        >
          <TouchableOpacity
            onPress={() => alert("Populer Alıcı Ol")}
            style={styles.centerPopulersContainer}
          >
            <Text style={styles.populerText}>Populer Alıcı Ol</Text>
          </TouchableOpacity>
          {headerImages.length > 0 ? (
            <View style={styles.populerImagesContainer}>
              {headerImages.map((item, i) => {
                return (
                  <Image
                    key={i}
                    style={[styles.populerImage, , { right: dw(i * 17) }]}
                    source={item.image}
                  />
                );
              })}
            </View>
          ) : null}
        </View>
      ) : null}
      <View style={styles.rightContainer}>
        {righTitle ? (
          <TouchableOpacity onPress={righTitleOnPress}>
            <Text>{righTitle}</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.rightIconsWrapper}>
            <TouchableOpacity onPress={editOnPress} style={styles.righIcon1}>
              <Edit width={dw(18)} height={dw(18)} fill={colors.black} />
            </TouchableOpacity>
            <View style={styles.verticalLine} />
            <TouchableOpacity onPress={addOnPress} style={styles.righIcon2}>
              <Add width={dw(16)} height={dw(16)} fill={colors.black} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default Header;
