import { StyleSheet, Text, ScrollView, View, Image,SafeAreaView } from 'react-native'
import React from 'react'
import FitnessCards from '../components/FitnessCard'

const HomeScreen = () => {
    return (
            <SafeAreaView style={{marginTop:10, width:'100%'}}>
            <View style={{ backgroundColor: '#A7D2CB', padding: 10, height: 112, width: "100%" }}>
                <Text style={{ color: 'white', fontWeight: "bold", fontSize: 18 }}>Fitness App</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: "center",
                        justifyContent: 'space-between'
                    }}>


                    <View
                        style={{
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
                        <Text style={{
                            fontSize: 17,
                        }}
                        >Exercices
                        </Text>
                    </View>

                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: 'space-between',
                            marginTop: 20,
                        }}>
                        <Text style={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: 18,
                        }}>0</Text>
                        <Text style={{
                            fontSize: 17,
                        }}>
                            Calorie
                        </Text>
                    </View>


                    <View style={{
                        alignItems: "center",
                        justifyContent: 'space-between',
                        marginTop: 20,
                    }}>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: 18,
                            }}>0</Text>
                        <Text
                            style={{
                                fontSize: 17,
                            }}>
                            Temps
                        </Text>
                    </View>
                </View>
                        <FitnessCards />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen

const styles = StyleSheet.create({})
