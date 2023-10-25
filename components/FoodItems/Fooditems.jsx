import { View, Text, ScrollView, Button, useColorScheme, FlatList, TouchableOpacity } from "react-native";

import styles from "./fooditems.style";
import { useState, useEffect } from "react";
import { Stack, useRouter } from "expo-router";

import FoodItemsService from "../../services/fooditems.service";
import FoodItem from "../FoodItem/FoodItem";
import FoodItemForm from "../FoodItemForm/FoodItemForm";

const FoodItems = ({ navigation }) => {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();

    }, []);

    const handleClick = (name) => {
        alert("ljkjklj");
    }

    const getData = async () => {
        // setIsLoading(true);

        try {
            const resp = await FoodItemsService.getFoodItems();
            setData(resp.data);
            // console.log(resp.data);
            // setIsLoading(false);
        } catch (error) {
            // setError(error);
            console.log(error);
        } finally {
            // setIsLoading(false);
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <FoodItem handleClick={handleClick} navigation={navigation} key={`item-${item.id}`} item={item} />
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.appHeader}>
                <Text style={styles.appHeaderText}>Ruoka-aineet</Text>
            </View>

            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>

            {/* <ScrollView style={styles.content}>
                {data?.map((item, index) => (
                    <FoodItem handleClick={handleClick} key={`item-${item.id}`} item={item} />
                ))}
            </ScrollView > */}
        </View>
    );
};
export default FoodItems;
