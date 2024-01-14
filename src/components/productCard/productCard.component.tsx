import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Styles} from './productCard.styles'
import {formatIndianCurrency} from '../../../utils/utils'
import {Dots, Star} from '../../../assets/images';
import { s } from 'react-native-size-matters';
interface productCardProps{
    img:string;
    title:string;
    price:string;
    review:string;
    star:string
}
const ProductCard = (props:productCardProps) => {
  return (
    <View style={[Styles.container,Styles.shadowProp]}>
      <Image source={{uri:props.img}} width={100} height={100} />
      <Text style={Styles.title}>{props.title}</Text>
      <Text style={Styles.price}>{formatIndianCurrency(props.price)}</Text>
      <View style={Styles.topM}>
        <View style={Styles.flexDir}>
        <Image source={Star} style={Styles.mR}/>
        <Text style={Styles.text}>{props.star}</Text>
        <Text style={[Styles.left,Styles.text]}>{props.review}{' Reviews'}</Text>
        </View>
        <View><Image width={14} height={14} source={Dots}/></View>
       </View>
    </View>
  )
}

export default ProductCard

