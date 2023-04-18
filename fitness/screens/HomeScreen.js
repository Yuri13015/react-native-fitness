import {StyleSheet, Text, SafeAreaView, View} from 'react-native'
import React from 'react'

const HomeScreen = () => {
    return(
        <SafeAreaView>
            <View style = {{backgroundColor: '#A7D2CB',padding:10,height:200,width:"100%"}}>
            <Text style={{color:'white',fontWeight:"bold",fontSize:18}}>Fitness App</Text>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
