import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import styles from './calendaritemform.style';
import CalendarItemService from "../../services/foodcalendar.service";

const CalendarItemForm = ({route, navigation}) => {
    const { id } = route.params;

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // setMissingDataMsg('');
            getData();
        });
        return unsubscribe;
    });


    const getData = async () => {
        // setIsLoading(true);
        try {
            const { data } = await CalendarItemService.getFoodCalendarItemById(id);
            console.log(data);
            if (data.id) {
    
                
            } else {
                
            }

            // setIsLoading(false);
        } catch (error) {
            // setError(error);
            // clearData();
            console.log(error);
        } finally {
            // setIsLoading(false);
        }
    };


    return (
        <View style={styles.container}>
            <View style={styles.appHeader}>
                <Text style={styles.appHeaderText}>Kalorikirjaus</Text>
            </View>
            <View style={styles.content}>
                <Text>Form id {id}</Text>



            </View>
            


        </View>
    )





};
export default CalendarItemForm;