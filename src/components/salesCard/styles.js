import { StyleSheet } from "react-native";
import colors from "../../res/style/colors";
import { dw, ios } from "../../functions/developerFunc";

const styles = StyleSheet.create({
  container: {
    marginTop: dw(10),
    padding: dw(10),
    borderRadius: dw(7),
    marginHorizontal: dw(20),
    backgroundColor: colors.white,
    shadowColor: "rgba(14, 21, 31, 0.3)",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profile: {
    flexDirection: "row",
  },
  profileImg: {
    width: dw(33),
    height: dw(33),
    borderRadius: dw(4),
    marginRight: dw(9),
  },
  nameText: {
    fontSize: dw(15),
    color: colors.black,
    maxWidth: dw(120),
  },
  situation: {
    fontSize: dw(12),
    color: colors.passiveText,
    maxWidth: dw(100),
  },
  contact: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightText: {
    fontSize: dw(13),
    fontWeight: "bold",
    color: colors.passiveText,
    maxWidth: dw(85),
  },
  iconWrapper: {
    width: dw(32),
    height: dw(32),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.button,
    borderRadius: dw(7),
    marginLeft: dw(9),
  },
  carImageWrapper: {
    alignItems: "center",
    marginTop: dw(8),
  },
  carImage: {
    width: dw(309),
    height: dw(135),
    borderRadius: dw(7),
  },
  brandImage: {
    position: "absolute",
    bottom: dw(8),
    left: dw(8),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: dw(7),
    width: dw(43),
    height: dw(43),
  },
  statementWrapper: {
    color: colors.black,
    fontSize: dw(15),
    fontWeight: "500",
    marginTop: dw(7),
    marginBottom: dw(10),
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomLeftContainer: {
    justifyContent: "center",
    width: dw(114),
    borderRightWidth: dw(1),
    borderRightColor: colors.button,
  },
  kmContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  gasContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: dw(8),
  },
  bottomRightContainer: {},
  datePriceWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: dw(8),
  },
  bottomLeftTexts: {
    color: colors.passiveText,
    marginLeft: dw(5),
    fontSize: dw(14),
  },
  priceText: {
    fontSize: dw(18),
    fontWeight: "800",
    color: colors.orange,
    marginLeft: dw(20),
  },
  currency: {
    fontSize: dw(15),
    fontWeight: "800",
    color: "gray",
    marginLeft: dw(3),
  },
});

export default styles;
