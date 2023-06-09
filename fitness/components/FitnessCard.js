import { StyleSheet, Text, View , Pressable, Image} from "react-native";
import React from "react";
import fitness from "../data/fitness";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


const FitnessCards =() => {
    const FitnessData = fitness;
    const navigation = useNavigation()
    return( 
        <View>
                {FitnessData.map((item,key) => (
                    <Pressable style={{alignItems:'center',justifyContent:'center',margin:10,}} key={key}
                    onPress={()=> navigation.navigate('Workout',{
                        image: item.image,
                        excersises: item.excersises,
                        id:item.id,
                    })}>

                        <Image style={{width:'95%',height:140, borderRadius:7}} source={{uri:item.image}}></Image>
                        <Text style={{position:'absolute',fontSize:16,fontWeight:'bold',left:30,top:25}}>{item.name}</Text>
                        <MaterialIcons style={{position:'absolute',bottom:15,left:20}} name="offline-bolt" size={24} color="yellow" />
                    </Pressable>
                ))}
        </View>

    )
}

export default FitnessCards

const styles = StyleSheet.create({})