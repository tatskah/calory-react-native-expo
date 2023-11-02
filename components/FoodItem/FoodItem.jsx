import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Pressable,
} from "react-native";
import styles from "./fooditem.style";

const FoodItem = ({ item, navigation }) => {
    const [data, setData] = useState(item);

    useEffect(() => {
        // setData(item);
    }, []);

    return (


        <Pressable
            onPress={() => navigation.navigate('FoodItemForm', { id: item.id })}
            style={item.favorite ? styles.containerFavorite : styles.container}
        >
            <View style={{ flex: 1, justifyContent: "space-between", width: "100%" }}>
                <View style={styles.item_title}>
                    <Text styles={styles.name}>{item.name} </Text>
                </View>

                <View style={styles.calrow}>
                    <Text style={[styles.calrowitem, { flex: 1 }]}>Kcal: {item.kcal.toFixed(2)}</Text>
                    <Text style={[styles.calrowitem, { flex: 1 }]}>Kj: {item.kj.toFixed(2)}</Text>
                    <Text style={[styles.calrowitem, { flex: 1 }]}>Rasvaa: {item.fat.toFixed(2)}</Text>
                </View>

            </View>
        </Pressable>



    );
};
export default FoodItem;
