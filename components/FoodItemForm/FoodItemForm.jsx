import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import FoodItemsService from "../../services/fooditems.service";

import styles from './fooditemform.style';
import { CheckBox } from 'react-native-elements';


const FoodItemForm = ({ route, navigation }) => {
    const { id } = route.params;
    const [name, setName] = useState('');
    const [kcal, setKcal] = useState('');
    const [kj, setKj] = useState('');
    const [fat, setFat] = useState('');
    const [protein, setProtein] = useState('');
    const [carbohydrate, setCarbohydrate] = useState('');
    const [favorite, setFavorite] = useState(false);
    const [missingDataMsg, setMissingDataMsg] = useState('');

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
        const unsubscribe = navigation.addListener('focus', () => {
            setMissingDataMsg('');
            getData();
        });
        return unsubscribe;
    });

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
                setFavorite(data.favorite);
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
        setName('')
        setKcal(0);
        setKj(0);
        setFat(0);
        setProtein(0);
        setCarbohydrate(0);
        setFavorite(false);
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

    const updateItem = async () => {
        const data = {
            name: name,
            kcal: kcal,
            kj: kj,
            fat: fat,
            protein: protein,
            carbohydrate: carbohydrate,
            favorite: favorite
        }
        // console.log("update "+ JSON.stringify(data));
        try {
            if (name.length > 3) {
                const del = await FoodItemsService.updateFoodItem(id, data);
            } else {
                setMissingDataMsg('Nimen pituus pitää olla yli 3 merkkiä');
            }
        } catch (error) {
            console.log(error);
        } finally {
            if (name.length > 3) {
                navigation.navigate('FoodItems');
            }
        }
    }

    const createItem = async () => {
        const data = {
            name: name,
            kcal: kcal,
            kj: kj,
            fat: fat,
            protein: protein,
            carbohydrate: carbohydrate,
            favorite: favorite
        }
        // console.log("update "+ JSON.stringify(data));
        try {
            if (name.length > 3) {
                const newItem = await FoodItemsService.saveFoodItem(data);
            } else {
                setMissingDataMsg('Nimen pituus pitää olla yli 3 merkkiä');
            }

        } catch (error) {
            console.log(error);
        } finally {
            if (name.length > 3) {
                navigation.navigate('FoodItems');
            }
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.appHeader}>
                <Text style={styles.appHeaderText}>Aines</Text>
            </View>
            <View style={styles.content}>

                <Text style={styles.title}>Nimi:
                    <Text style={styles.nameError}>{missingDataMsg}</Text>
                </Text>

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

                <View style={styles.checkboxContainer}>
                    <CheckBox
                        style={styles.checkbox}
                        checked={favorite}
                        onValueChange={setFavorite}
                        onPress={() => setFavorite(!favorite)}
                    />
                    <Text style={styles.checkboLabel}>Suosikki</Text>
                </View>

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
                        onPress={id > 0 ? updateItem : createItem}
                    >
                        <Text style={styles.buttonText}>Tallenna</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export default FoodItemForm