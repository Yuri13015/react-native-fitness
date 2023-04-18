import { StyleSheet, Text, View , Pressable, Image} from "react-native";
import React from "react";
import fitness from "../data/fitness";


const FitnessCards =() => {
    const FitnessData = fitness;
    return( 
        <View>
                {FitnessData.map((item,key) => (
                    <Pressable style={{alignItems:'center',justifyContent:'center',margin:10, paddingTop:10,marginTop:30}} key={key}>
                        <Image style={{width:'90%',height:140, borderRadius:7}} source={{uri:item.image}}></Image>
                        <Text style={{position:'absolute',fontSize:16,fontWeight:'bold',left:30,top:25}}>{item.name}</Text>
                    </Pressable>
                ))}
            <Text>FitnessCards</Text>
        </View>

    )
}

export default FitnessCards

const styles = StyleSheet.create({})