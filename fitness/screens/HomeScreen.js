import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native'
import React from 'react'
import FitnessCards from '../components/FitnessCard'

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

                <View style={{alignItems:'center'}} >
                        <Image style={{width:'90%',height:120, marginTop:20, borderRadius:7}} source={{
                            uri: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png'
                        }} />
                    </View>
                        <FitnessCards></FitnessCards>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
