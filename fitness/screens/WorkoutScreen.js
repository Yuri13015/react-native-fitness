import { StyleSheet, Text, View, SafeAreaView, Image, Pressable, ScrollView} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const WorkoutScreen = () => {
    const route = useRoute();
    console.log(route.params);
    const navigation = useNavigation();
    return (
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
                {route.params.excersises.map((item,index)=>(
                    <Pressable style={{margin:10, flexDirection:'row',alignItems:'center'}} key={index}>
                        <Image style={{width:90, height:90}} source={{uri:item.image}} />
                        <View style={{marginLeft:10}} >
                            <Text style={{fontSize:17,fontWeight:'bold'}} >{item.name}</Text>
                            <Text style={{marginTop:4,fontSize:16,color:'gray'}}>x{item.sets}</Text>
                        </View>
                    </Pressable>
                ))}
        </ScrollView>
    )
}

export default WorkoutScreen
const styles = StyleSheet.create({})