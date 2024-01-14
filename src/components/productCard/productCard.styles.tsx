import { StyleSheet } from "react-native";
import { s } from "react-native-size-matters";
import { palette } from "../../../assets/palette";
import { fonts } from "../../../assets/fonts";

export const Styles = StyleSheet.create({
container:{paddingVertical:s(15),paddingHorizontal:s(10)},
shadowProp: {
    shadowColor: palette.black,
    width:s(150),
    elevation:10,
    borderRadius:s(10),
    shadowOffset: {width: 12, height: 10},
    backgroundColor:palette.white,
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  flexDir:{flexDirection:'row'},
  mR:{marginRight:s(3)},
  text:{fontFamily:fonts.DMSansRegular,fontSize:s(10),color:palette.black},
  left:{marginLeft:s(10)},
  topM:{flexDirection:'row',marginTop:s(10),alignItems:'center',justifyContent:'space-between'},
  price:{fontFamily:fonts.DMSansRegular,fontSize:s(12),color:palette.red,marginTop:s(4)},
  title:{fontFamily:fonts.DMSansRegular,fontSize:s(14),color:palette.black,marginTop:s(20)}
})