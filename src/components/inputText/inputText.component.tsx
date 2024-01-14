import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import {Styles} from './inputText.styles'
interface inputTextProps{
    placeholder:string;
}
const InputText = (props:inputTextProps) => {
  return (
    
    <TextInput placeholder={props.placeholder} style={[Styles.input,Styles.text]}/>
    
  )
}

export default InputText

