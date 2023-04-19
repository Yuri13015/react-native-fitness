import { StyleSheet, Text, View, SafeAreaView, Image, Pressable, ScrollView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { FitnessItems } from "../Context";
import { useContext } from "react";
import { AntDesign } from '@expo/vector-icons';

const WorkoutScreen = () => {
    const route = useRoute();
   // console.log(route.params);
    const navigation = useNavigation();
    const {
        completed,setCompleted,
    } = useContext(FitnessItems);
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image style={{ width: '100%', height: 180, marginTop: 25 }} source={{ uri: route.params.image }} />

                <Ionicons
                    onPress={() => navigation.goBack()}
                    style={{
                        position: "absolute",
                        top: 50,
                        left: 20
                    }}
                    name="arrow-back-circle-sharp"
                    size={50}
                    color="black" />
                {route.params.excersises.map((item, index) => (
                    <Pressable
                        style={{
                            margin: 10,
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                        key={index}>
                        <Image
                            style={{
                                width: 90,
                                height: 90
                            }}
                            source={{
                                uri: item.image
                            }}
                        />
                        <View
                            style={{
                                marginLeft: 10
                            }} >
                            <Text
                                style={{
                                    fontSize: 17,
                                    fontWeight: 'bold',
                                    width:190,
                                }} >
                                {item.name}
                            </Text>
                            <Text
                                style={{
                                    marginTop: 4,
                                    fontSize: 16,
                                    color: 'gray'
                                }}>
                                x{item.sets}
                            </Text>
                        </View>

                        {completed.includes(item.name) ? (
                            <AntDesign name="checkcircle" size={34} color="green" />
                        ):(
                            null
                        )}
                    </Pressable>
                ))}
            </ScrollView>

            <Pressable
                onPress={()=>{
                    navigation.navigate('Fit',{
                    excersises:route.params.excersises,
                })
                    setCompleted([]);
                }}
                style={{
                    backgroundColor: 'white',
                    padding: 10,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginVertical: 10,
                    borderRadius: 7,
                    width: 120
                }}>
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 15,
                        fontWeight: '600'
                    }}>
                    START
                </Text>

            </Pressable>
        </>
    )
}

export default WorkoutScreen
const styles = StyleSheet.create({})