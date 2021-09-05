import { StyleSheet } from "react-native";
import colors from "../../res/style/colors";
import { dw, ios } from "../../functions/developerFunc";

const styles = StyleSheet.create({
  searchContainer: {
    marginBottom: dw(9),
    marginHorizontal: dw(20),
    backgroundColor: colors.white,
    width: dw(375 - 40),
    height: dw(42),
    borderRadius: dw(7),
    paddingHorizontal: dw(11),
    alignItems: "center",
    flexDirection: "row",
    shadowColor: "rgba(14, 21, 31, 0.3)",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  textInput: {
    marginLeft: dw(10),
    fontSize: dw(14),
    flex: 1,
    height: ios() ? dw(30) : null,
  },
  carBrandsWrapper: { 
    height: dw(60.73), 
    marginBottom: dw(4) 
  },
});

export default styles;
