import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg'
interface iconProps {
    icon:string;
    height:number;
    width:number;
}
const Icon = (props:iconProps) => {
  return (
    <View>
      <SvgXml xml={props.icon} height={props.height} width={props.width} />
    </View>
  )
}

export default Icon

