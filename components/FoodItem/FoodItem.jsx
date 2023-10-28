import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import styles from "./fooditem.style";

const FoodItem = ({ item, navigation }) => {
    const [data, setData] = useState(item);

    useEffect(() => {
        // setData(item);
    }, []);

    return (

        <View>
            <TouchableOpacity
                onPress={() => navigation.navigate('FoodItemForm', { id: item.id })}
                style={item.favorite ? styles.containerFavorite : styles.container}
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
