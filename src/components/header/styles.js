import { StyleSheet } from "react-native";
import colors from "../../res/style/colors";
import { dw } from "../../functions/developerFunc";

const styles = StyleSheet.create({
  container: {
    paddingBottom: dw(18),
    paddingTop: dw(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: dw(20),
    paddingRight: dw(20),
  },
  leftContainer: {
    height: dw(32),
    width: dw(32),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.button,
    borderRadius: dw(7),
  },
  centerContainer: {
    paddingVertical: 5,
    alignItems: "center",
    flexDirection: "row",
  },
  centerPopulersContainer: {
    height: dw(32),
    width: dw(150),
    backgroundColor: colors.orange,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: dw(7),
  },
  populerImagesContainer: {
    flexDirection: "row",
    right: dw(17),
    width: dw(34),
    height: dw(34),
  },
  populerImage: {
    width: dw(34),
    height: dw(34),
    borderRadius: dw(17),
    borderWidth: dw(1),
    borderColor: colors.white,
  },
  populerText: {
    fontSize: dw(15),
    color: colors.white,
  },
  centerTitle: {},
  rightIconsWrapper: {
    flexDirection: "row",
    backgroundColor: colors.button,
    borderRadius: dw(7),
    alignItems: "center",
  },
  righIcon1: {
    height: dw(32),
    width: dw(32),
    justifyContent: "center",
    alignItems: "center",
  },
  righIcon2: {
    height: dw(32),
    width: dw(32),
    justifyContent: "center",
    alignItems: "center",
  },
  verticalLine: {
    height: "80%",
    width: 1,
    backgroundColor: colors.passiveText,
  },
});

export default styles;
