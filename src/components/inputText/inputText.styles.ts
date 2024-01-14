import { StyleSheet } from "react-native";
import { palette } from "../../../assets/palette";
import { s } from "react-native-size-matters";
import { fonts } from "../../../assets/fonts";

export const Styles = StyleSheet.create({
    input:{backgroundColor:palette.offGrey,width:'100%',paddingHorizontal:s(20),paddingVertical:s(16),borderRadius:s(10)},
text:{fontFamily:fonts.DMSansRegular,fontSize:s(14)}
})