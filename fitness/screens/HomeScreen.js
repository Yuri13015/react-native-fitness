import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View style={{ backgroundColor: '#A7D2CB', padding: 10, height: 200, width: "100%" }}>
                <Text style={{ color: 'white', fontWeight: "bold", fontSize: 18 }}>Fitness App</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: "center",
                        justifyContent: 'space-between'
                    }}>


                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: "center",
                            justifyContent: 'space-between',
                            marginTop: 20,
                        }}>

                        <Text
                            style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: 18,
                            }}>
                                0
                                </Text>
                        <Text>Exercices</Text>
                    </View>
                    <View>
                        <Text>0</Text>
                        <Text>Calorie</Text>
                    </View>
                    <View>
                        <Text>0</Text>
                        <Text>Temps</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
