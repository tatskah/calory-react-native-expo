import React, { useState, useEffect } from "react";
import { ListItem } from 'react-native-elements'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "./fooditem.style";

const FoodItem = ({ item, navigation, handleClick }) => {
    
    useEffect(()=>{
        
    },[]);

    return (

        <View>
            <TouchableOpacity
                onPress={() => navigation.navigate('FoodItemForm', { item: item })}
                style={styles.container}
            >
                <View style={styles.item_title}>
                    <Text styles={styles.name}>{item.name} </Text>
                </View>

                <View style={styles.calrow}>
                    <Text style={styles.calrowitem}>Kcal: {item.kcal.toFixed(2)}</Text>
                    <Text style={styles.calrowitem}>Kj: {item.kj.toFixed(2)}</Text>
                    <Text style={styles.calrowitem}>Rasvaa: {item.fat.toFixed(2)}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};
export default FoodItem;
