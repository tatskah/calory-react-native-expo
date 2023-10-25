import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

import styles from './fooditemform.style';

const FoodItemForm = ({ route, navigation }) => {
    const { item } = route.params;

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
        setName(item.name);
        setKcal(item.kcal);
        setKj(item.kj);
        setFat(item.fat);
        setProtein(item.protein);
        setCarbohydrate(item.carbohydrate);
    }, []);

    const deleteItem = () => {
        console.log("DELETE " + name);

        //TODO save data
    }

    return (
        <View style={styles.container}>
            <View style={styles.appHeader}>
                <Text style={styles.appHeaderText}>Ruoka-aines</Text>
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