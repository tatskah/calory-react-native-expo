import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from './settingsform.styles';
import SettingsService from "../../services/settings.service";
import { TextInput } from "react-native-paper";

const SettingsForm = ({ navigation }) => {
    const [restApiUrl, setRestApiUrl] = useState('');
    const [appName, setAppName] = useState('');

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getData();
        })
        return unsubscribe;
    })

    const getData = async () => {

        try {
            const { data } = await SettingsService.getSettings();
            data.forEach(el => {
                if (el.name === 'REST_API_URL') setRestApiUrl(el.value);
                if (el.name === 'APP_NAME') setAppName(el.value);
            });
        } catch (err) {
            console.log(err);
        } finally {

        }
    }

    const update = async () => {
        const settingsData = [
            { name: 'REST_API_URL', value: restApiUrl },
            { name: 'APP_NAME', value: appName }
        ]
        try {
            const { data } = await SettingsService.update(settingsData);
        } catch (err) {
            console.log(err);
        } finally { }
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <View style={styles.appHeader}>
                <Text style={styles.appHeaderText}>Asetukset</Text>
            </View>

            <View style={styles.content}>
                <Text>Ohjelman nimi</Text>
                <TextInput style={styles.input}
                    value={appName}
                    onChangeText={(text) => setAppName(text)}
                />

                <Text>REST API URL</Text>
                <TextInput style={styles.input}
                    value={restApiUrl}
                    onChangeText={(text) => setRestApiUrl(text)}
                />


                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.buttonRed}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Text style={styles.buttonText}>Sulje</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonGreen}
                        onPress={update}
                    >
                        <Text style={styles.buttonText}>Tallenna</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>

    );

}
export default SettingsForm;