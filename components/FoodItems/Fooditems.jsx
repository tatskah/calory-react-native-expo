import { View, Text, useColorScheme, FlatList, Image, Pressable } from "react-native";

import styles from "./fooditems.style";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";

import FoodItemsService from "../../services/fooditems.service";
import FoodItem from "../FoodItem/FoodItem";
import { icons } from "../../constants";
import { TextInput } from "react-native-paper";

const FoodItems = ({ navigation }) => {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log("1");
            getData();
        });
        return unsubscribe;
    }, [navigation]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            console.log("2");
            getData();
        });
        return unsubscribe;
    }, [navigation]);

    const getData = async () => {
        // setIsLoading(true);
        let resp = null;
        try {
            if (search) {
                resp = await FoodItemsService.getFoodItemsByName(search);
            } else {
                resp = await FoodItemsService.getFoodItems();
            }
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
            <FoodItem navigation={navigation} key={`item-${item.id}`} item={item} />
        </View>
    );

    return (
        <View style={styles.container}>

            <View style={styles.appHeader}>
                <Text style={styles.appHeaderText}>Ainekset</Text>
                <TextInput
                    style={styles.searchInput}
                    onChangeText={(text) => setSearch(text)}
                    value={search}
                    onFocus={() => setSearch('')}
                >
                </TextInput>
                <Pressable onPress={() => getData()}>
                    <Image
                        source={icons.search}
                        style={styles.search_icon}

                    />
                </Pressable>


            </View>

            <View style={styles.content}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={() => (!data.length ?
                        <View style={styles.empty_list_content}>
                            <Text style={styles.empty_text}>Ei tietueita!</Text>
                        </View>
                        : null)}
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
