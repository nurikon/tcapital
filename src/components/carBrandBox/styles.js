import { StyleSheet } from "react-native";
import colors from "../../res/style/colors";
import { dw } from "../../functions/developerFunc";

const styles = StyleSheet.create({

  carBrandsWrapper: {
    width: "100%",
    height:dw(60),
    flexDirection:'row',
    backgroundColor: 'green',

  },
  carBrandWrapper: {
    width:dw(60.73),
    height:dw(60.73),
    backgroundColor: colors.button,
    justifyContent:'center',
    alignItems:'center',
    marginRight:dw(8),
    borderRadius:dw(8)
  },
});

export default styles;