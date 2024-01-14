import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {Styles} from './button.styles'
import { palette } from '../../../assets/palette';
interface buttonProps{
    title:string;
    textColor?:string;
    backGround?:string;
}
const Button = ({title,textColor,backGround}:buttonProps) => {
  return (
    <TouchableOpacity style={[Styles.container,{backgroundColor:backGround??palette.blue}]}>
        <Text style={[Styles.title,{color:textColor?? palette.white}]}>{title}</Text>
    </TouchableOpacity>
    
  )
}

export default Button
