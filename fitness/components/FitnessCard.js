import { StyleSheet, Text, View , Pressable, Image} from "react-native";
import React from "react";
import fitness from "../data/fitness";


const FitnessCards =() => {
    const FitnessData = fitness;
    return( 
        <View>
                {FitnessData.map((item) => (
                    <Pressable>
                        
                    </Pressable>
                ))}
            <Text>FitnessCards</Text>
        </View>

    )
}

export default FitnessCards

const styles = StyleSheet.create({})