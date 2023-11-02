import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import FoodCalendarService from '../../services/foodcalendar.service';
import CalendarItem from '../CalendarItem/CalendarItem';

import styles from './foodcalendar.style';
import { SafeAreaView } from 'react-native-safe-area-context';

const FoodCalendar = (navigation) => {
    const [foodCalendarData, setFoodCalendarData] = useState([]);
    const [foodData, setFoodData] = useState({
        add_date: null,
        kcal_sum: 0,
        kj_sum: 0,
        fat_sum: 0,
        protein_sum: 0,
        carbohydrate_sum: 0,
        CalendarItems: []
    })


    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        // setIsLoading(true);

        try {
            const resp = await FoodCalendarService.getFoodCalendarItems();
            setFoodCalendarData(resp.data);
            // setIsLoading(false);
        } catch (error) {
            // setError(error);
            console.log(error);
        } finally {
            // setIsLoading(false);
        }
    };


    function prt(msg) {
        console.log(msg);
    }

    const renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <CalendarItem navigation={navigation} item={item} />
        </View>
    );

    const itemSeparator = () => {
        return <View style={{ height: 2, backgroundColor: "#1F6702", marginTop: 1 }} />
    };

    return (
        <View style={styles.container}>

            <View style={styles.appHeader}>
                <Text style={styles.appHeaderText}>Kalenteri</Text>
            </View>

            <View style={styles.content}>

                <FlatList
                    scrollToOverflowEnabled={true}
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={itemSeparator}
                    data={foodCalendarData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={() => (!foodCalendarData.length ?
                        <View style={styles.empty_list_content}>
                            <Text style={styles.empty_text}>Ei tietueita!</Text>
                        </View>
                        : null)}

                />

            </View>

        </View>

    );



}
export default FoodCalendar;
