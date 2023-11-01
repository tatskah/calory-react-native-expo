import { View, Text, FlatList, Image, Pressable, ActivityIndicator } from "react-native";

import styles from "./fooditems.style";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";

import FoodItemsService from "../../services/fooditems.service";
import FoodItem from "../FoodItem/FoodItem";
import { icons } from "../../constants";
import { TextInput } from "react-native-paper";

import { createStackNavigator } from '@react-navigation/stack';

const FoodItems = ({ navigation }) => {
    const router = useRouter();

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState('');
    const Stack = createStackNavigator();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getData();
        });
        return unsubscribe;
    }, []);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getData();
        });
        return unsubscribe;
    }, [navigation]);

    // useEffect(() => {
    //     const unsubscribe = navigation.addListener('blur', () => {
    //         //getData();
    //     });
    //     return unsubscribe;
    // }, [navigation]);

    const getData = async () => {
        setIsLoading(true);
        let resp = null;
        try {
            if (search) {
                resp = await FoodItemsService.getFoodItemsByName(search);
            } else {
                resp = await FoodItemsService.getFoodItems();
            }
            setData(resp.data);
            // console.log(resp.data);
            setIsLoading(false);
        } catch (error) {
            // setError(error);
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const indicator = () => (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <ActivityIndicator size={"large"} />
        </View>
    )


    const renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <FoodItem navigation={navigation} key={`item-${item.id}`} item={item} />
        </View>
    );

    return (


        <View style={styles.container}>
            {isLoading ?
                <View style={{marginTop:50, height: 20, zIndex: 1 }}>
                    <Text style={{color:"#1F6702"}}>Ladataan...</Text>
                    <ActivityIndicator size="large" color="#1F6702" />
                </View>

                : <View/>
            }

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
                <Pressable onPress={() => navigation.navigate('FoodItemForm', { id: 0 })}>
                    <Image
                        source={icons.new_item2}
                        style={styles.new_icon}
                    />
                </Pressable>

            </View>

            <View style={styles.content}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (!data.length ?
                        <View style={styles.empty_list_content}>
                            <Text style={styles.empty_text}>Ei tietueita!</Text>
                        </View>
                        : null)}
                />
            </View>
            
        </View>
    );
};
export default FoodItems;
