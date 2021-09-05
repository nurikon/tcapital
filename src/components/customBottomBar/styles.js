import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../res/style/colors";
import { dw, getBottomSpace } from "../../functions/developerFunc";

const styles = StyleSheet.create({
  tabGlobal: {
    backgroundColor: colors.white,
    width: "100%",
    height: dw(50) + getBottomSpace(),
    shadowColor: colors.black,
    flexDirection: "row",
    paddingBottom: getBottomSpace(),
    alignItems: "center",
    shadowColor: "#828282",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 7,
  },
  tabItem: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  buyerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.orange,
    width: dw(80),
    height: dw(27),
    borderRadius: dw(27)
  },
  buyerText: {
    color: colors.white,
    marginLeft:dw(3),
    fontSize:dw(14)
  },
  profileImg:{
    width:dw(20),
    height:dw(20),
    borderRadius:dw(3)
  }
});

export default styles;
