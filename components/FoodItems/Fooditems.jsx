import { View, Text, ScrollView, Button, useColorScheme, FlatList } from "react-native";

import styles from "./fooditems.style";
import { useState, useEffect } from "react";
import { Stack, useRouter } from "expo-router";

import FoodItemsService from "../../services/fooditems.service";
import FoodItem from "../FoodItem/FoodItem";

const FoodItems = () => {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();

    }, []);

    const handleClick = (name) => {
        alert(name);
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

    return (
        <ScrollView style={{ backgroundColor: "#FFF" }}>
            <View>
                {/* <Button title="Toggle Toast" onPress={() => showToast()} /> */}

                <Text style={{ fontSize: 16, textAlign: "center", padding: 2, backgroundColor: "#3DDC84" }}>Ruoka-aineet</Text>

                {data?.map((item, index) => (

                    <FoodItem handleClick={handleClick} key={`item-${item.id}`} item={item} />

                ))}


            </View>
        </ScrollView >
    );
};
export default FoodItems;
