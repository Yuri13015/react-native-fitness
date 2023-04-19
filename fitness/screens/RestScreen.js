import { StyleSheet, Text, View,SafeAreaView,Image } from 'react-native'
import React from 'react'

const RestScreen = () => {
  return (
    <SafeAreaView>
      <Image
      source={{
        uri:"https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_500:300,c_fit/dpr_2/image/carefit/bundle/CF01032_magazine_2.png",
      }} style={{width:'100%',height:420}} />
      <Text style={{fontSize: 30,fontWeight:'900',
      marginVertical:50,
    textAlign:'center',
    }} >
        PAUSE 30s
        </Text>
    </SafeAreaView>
  )
}

export default RestScreen

const styles = StyleSheet.create({})