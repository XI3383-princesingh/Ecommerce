import { Image, Text, View } from 'react-native'
import React from 'react'
import {Styles} from './home.screen.styles'
import { Bell, ShoppingCart } from '../../../assets/images';
import { s } from 'react-native-size-matters';
const Home = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <Text style={Styles.headerText}>
          {'Mega Mall'}</Text>
       <View style={{flexDirection:'row',position:'absolute',top:s(18), right:s(25)}}>
        <Image source={Bell} width={s(20)} height={s(20)}/>
        <Image style={{marginLeft:s(20)}} source={ShoppingCart} width={s(20)} height={s(20)}/>
        </View>
        
        </View>
    </View>
  )
}

export default Home

