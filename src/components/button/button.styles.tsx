import { StyleSheet } from "react-native";
import { s } from 'react-native-size-matters';
import { fonts } from "../../../assets/fonts";
import { palette } from "../../../assets/palette";

export const Styles = StyleSheet.create({
title:{
    fontFamily:fonts.DMSansSemiBold,
    fontSize:s(14),
    color:palette.white
},
container:{
    borderRadius:s(10),
    paddingVertical:s(15),
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:palette.blue
}
})