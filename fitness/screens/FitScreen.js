import { StyleSheet, Text, View, SafeAreaView, Image, Pressable } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useContext} from 'react'
import { FitnessItems } from '../Context'



const FitScreen = () => {
    const route = useRoute();
    //console.log(route.params);
    const navigation = useNavigation();
    const [index, setIndex] = useState(0);
    const excersise = route.params.excersises;
    const current = excersise[index];
    //console.log(current, 'first excersise')
    const { completed, setCompleted, minutes, setMinutes, calories, setCalories, workout, setWorkout } = useContext(FitnessItems)
    console.log(completed,'completed excersise')
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
            {/* retour au menu apres que tout les exo soit fait  */}
            {index + 1 >= excersise.length ? (

                <Pressable
                    onPress={() => {
                        navigation.navigate('Home');
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
            ) : (
                <Pressable
                    onPress={() => {
                        navigation.navigate('Rest');
                        setCompleted([...completed, current.name])
                        setWorkout(workout + 1)
                        setMinutes(minutes + 1)
                        setCalories(calories + 7)
                        setTimeout(() => {
                            setIndex(index + 1)
                        }, 2000)
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
            )
            }

            <Pressable
                style={{ flexDirection: 'row', alignItems: 'center', fontWeight: 'bold', marginLeft: 'auto', marginRight: 'auto', marginTop: 30 }}>

                <Pressable
                    disabled={index === 0}
                    onPress={() => {
                        navigation.navigate('Rest');

                        setTimeout(() => {
                            setIndex(index - 1)
                        }, 2000)
                    }}
                    style={{ backgroundColor: '#A7D2CB', padding: 10, borderRadius: 15, marginHorizontal: 20, width: 120, alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold' }}>PRECEDENT</Text>
                </Pressable>

                {/*implémentation du bouton passer */}

                {index + 1 >= excersise.length ? (


                    <Pressable
                        onPress={() => {
                            navigation.navigate('Home');
                        }}
                        style={{ backgroundColor: '#A7D2CB', padding: 10, borderRadius: 15, marginHorizontal: 20, width: 120, alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold' }}>PASSER</Text>
                    </Pressable>


                ) : (
                    <Pressable
                        onPress={() => {
                            navigation.navigate('Rest');

                            setTimeout(() => {
                                setIndex(index + 1);
                            }, 2000)
                        }}
                        style={{ backgroundColor: '#A7D2CB', padding: 10, borderRadius: 15, marginHorizontal: 20, width: 120, alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold' }}>PASSER</Text>
                    </Pressable>

                )}


            </Pressable>
        </SafeAreaView >
    )
}

export default FitScreen

const styles = StyleSheet.create({})