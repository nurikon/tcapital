import { StyleSheet } from "react-native";
import colors from "../../res/style/colors";
import { dw } from "../../functions/developerFunc";

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  autoComplateWrapper:{
    top:dw(16),
    position:'absolute',
    width:dw(331),
    alignSelf:'center'
  },
  autoComplateInput:{
    width:dw(331),
    height:dw(42),
    borderRadius:dw(7),
  },
  gpsIcon:{
    position:'absolute',
    right:0,
    top:dw(3),
    justifyContent:'center',
    alignItems:'center',
    width:dw(36),
    height:dw(36),
  }
});

export default styles;
