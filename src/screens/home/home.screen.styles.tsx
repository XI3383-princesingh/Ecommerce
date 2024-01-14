import { StyleSheet } from "react-native";
import { palette } from "../../../assets/palette";
import { fonts } from "../../../assets/fonts";
import { s } from "react-native-size-matters";

export const Styles = StyleSheet.create({
    container:{backgroundColor:palette.white,flex:1},
headerText:{color:palette.blue,fontFamily:fonts.DMSansSemiBold, fontSize:s(18)},
header:{borderBottomWidth:s(2),borderBottomColor:palette.greyShadow,padding:s(16), flexDirection:'row', justifyContent:"center"}
})