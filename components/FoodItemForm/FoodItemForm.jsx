import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import FoodItemsService from "../../services/fooditems.service";

import styles from './fooditemform.style';


const FoodItemForm = ({ route, navigation }) => {
    const { id } = route.params;

    const [name, setName] = useState('');
    const [kcal, setKcal] = useState('');
    const [kj, setKj] = useState('');
    const [fat, setFat] = useState('');
    const [protein, setProtein] = useState('');
    const [carbohydrate, setCarbohydrate] = useState('');

    const handleSave = () => {
        console.log("name " + name);
        console.log("kcal " + kcal);
        console.log("kj " + kj);
        console.log("fat " + fat);
        console.log("protein " + protein);
        console.log("carbohydrate " + carbohydrate);

        //TODO save data
    }

    useEffect(() => {
        getData();
    })

    const getData = async () => {
        // setIsLoading(true);

        try {
            const { data } = await FoodItemsService.getFoodItemsById(id);

            if (data.id) {
                setName(data.name);
                setKcal(data.kcal);
                setKj(data.kj);
                setFat(data.fat);
                setProtein(data.protein);
                setCarbohydrate(data.carbohydrate);
            } else {
                clearData();
            }

            // setIsLoading(false);
        } catch (error) {
            // setError(error);
            clearData();
            console.log(error);
        } finally {
            // setIsLoading(false);
        }
    };

    function clearData() {
        const [name, setName] = useState('');
        const [kcal, setKcal] = useState('');
        const [kj, setKj] = useState('');
        const [fat, setFat] = useState('');
        const [protein, setProtein] = useState('');
        const [carbohydrate, setCarbohydrate] = useState('');
    }

    const deleteItem = async () => {
        try {
            const del = await FoodItemsService.deleteById(id);
        } catch (error) {
            console.log(error);
        } finally {
            navigation.navigate('FoodItems');
        }
    }

    const updateItem = () => {
        console.log("UPDATE " + name);

    }

    return (
        <View style={styles.container}>
            <View style={styles.appHeader}>
                <Text style={styles.appHeaderText}>Aines</Text>
            </View>
            <View style={styles.content}>

                <Text style={styles.title}>Nimi:</Text>
                <TextInput style={styles.input}
                    value={name}
                    // placeholder='Name'
                    onChangeText={(text) => setName(text)}
                />

                <Text style={styles.title}>Kcal:</Text>
                <TextInput style={styles.input}
                    value={kcal}
                    // placeholder='Kcal'
                    onChangeText={(text) => setKcal(text)}
                    keyboardType='decimal-pad'
                />

                <Text style={styles.title}>Kj:</Text>
                <TextInput style={styles.input}
                    value={kj}
                    // placeholder='Kj'
                    onChangeText={(text) => setKj(text)}
                    keyboardType='decimal-pad'
                />

                <Text style={styles.title}>Rasva:</Text>
                <TextInput style={styles.input}
                    value={fat}
                    // placeholder='Rasva'
                    onChangeText={(text) => setFat(text)}
                    keyboardType='decimal-pad'
                />

                <Text style={styles.title}>Proteiini:</Text>
                <TextInput style={styles.input}
                    value={protein}
                    // placeholder='Proteiini'
                    onChangeText={(text) => setProtein(text)}
                    keyboardType='decimal-pad'
                />

                <Text style={styles.title}>Hiilihydraatti:</Text>
                <TextInput style={styles.input}
                    value={carbohydrate}
                    // placeholder='Hiilihydraatti'
                    onChangeText={(text) => setCarbohydrate(text)}
                    keyboardType='decimal-pad'
                />

                <View style={styles.buttobContainer}>
                    <TouchableOpacity
                        style={styles.buttonRed}
                        onPress={() => navigation.navigate('FoodItems')}
                    >
                        <Text style={styles.buttonText}>Takaisin</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={deleteItem}
                    >
                        <Text style={styles.buttonText}>Poista</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleSave}
                    >
                        <Text style={styles.buttonText}>Tallenna</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default FoodItemForm