import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { useState } from 'react'

const FitScreen = () => {
    const route = useRoute();
    console.log(route.params);
    const [index,setIndex] = useState(0);
    const excersise = route.params.excersises;
    const current = excersise[index];
    console.log(current,'first excersise')
  return (
    <SafeAreaView>
      <Text>FitScreen</Text>
    </SafeAreaView>
  )
}

export default FitScreen

const styles = StyleSheet.create({})