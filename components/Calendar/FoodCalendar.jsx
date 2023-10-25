import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'

import styles from "./foodcalendar.style";

const FoodCalendar = () => {
    const [foodCalendar, setFoodCalendar] = useState([]);
    const [foodData, setFoodData] = useState({
        date: null,
        items: {
            name: '',
            piece: 0,
            gram: 0,
            kcal: 0,
            kj: 0,
            fat: 0,
            protein: 0,
            carbohydrate: 0
        }
    })

    useEffect(() => {
        getData();

    });

    const getData = () => {
        prt("ÖLKÖLKÖLK");
    };


    function prt(msg){
        console.log(msg);
    }

    return (
        <View>



        </View>
    );



}
export default FoodCalendar;
