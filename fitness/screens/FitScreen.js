import { StyleSheet, Text, View, SafeAreaView, Image,Pressable } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'



const FitScreen = () => {
    const route = useRoute();
    console.log(route.params);
    const navigation = useNavigation();
    const [index, setIndex] = useState(0);
    const excersise = route.params.excersises;
    const current = excersise[index];
    console.log(current, 'first excersise')
    return (
        <SafeAreaView>
            <Image
                style={{
                    width: '100%',
                    height: 370
                }}
                source={{ uri: current.image }} />

            <Text
                style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: 30,
                    fontSize: 30,
                    fontWeight: "bold",
                }}
            >
                {current.name}
            </Text>
            <Text
                style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: 30,
                    fontSize: 38,
                    fontWeight: "bold",
                }}
            >
                x{current.sets}
            </Text>
            <Pressable
            onPress={()=>{navigation.navigate('Rest')
            setTimeout(() => {
                    setIndex(index + 1)
            },2000)
            }}
          style={{
            backgroundColor: "white",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
            borderRadius: 20,
            padding: 10,
            width: 150,
          }}
        >
             <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
              color: "#292929",
            }}
          >
            SUIVANT
          </Text>
        
        </Pressable>
        </SafeAreaView>
    )
}

export default FitScreen

const styles = StyleSheet.create({})