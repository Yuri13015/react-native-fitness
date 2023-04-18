import { StyleSheet, Text, View, SafeAreaView, Image, Pressable } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const WorkoutScreen = () => {
    const route = useRoute();
    console.log(route.params);
    const navigation = useNavigation();
    return (
        <SafeAreaView>
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
                {route.params.excersises.map((item,index)=>(
                    <Pressable style={{margin:10}} key={index}>
                        <Image style={{width:90, height:90}} source={{uri:item.image}} />
                        <View>
                            <Text>{item.name}</Text>
                            <Text>{item.sets}</Text>
                        </View>
                    </Pressable>
                ))}
        </SafeAreaView>
    )
}

export default WorkoutScreen
const styles = StyleSheet.create({})