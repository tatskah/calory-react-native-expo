import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import { format } from 'date-fns';
import * as Progress from 'react-native-progress';
import styles from "./calendaritem.style";


const CalendarItem = ({ item, navigation }) => {
    const [data, setData] = useState(item);

    useEffect(() => {
        // setData(item);
    }, []);

    return (

        <View>
            <TouchableOpacity
                // onPress={() => navigation.navigate('CalendarItemForm', { id: item.id })}
                style={styles.container}
            >

                <View style={styles.item_title}>
                    {/* <Text styles={styles.name}>{format(item.add_date,'dd.MM.YYYY')}</Text> */}
                    <Text styles={styles.name}>{item.add_date}</Text>
                    <Progress.Bar style={styles.progress}
                     progress={Number((item.kcal_sum/1200).toFixed(1))} 
                     height={13} 
                     width={100} 
                     color="#98FF6F"
                     unfilledColor="#20AF61"
                     borderColor="#1F6702"
                     
                     />
                </View>

                <View style={styles.calrow}>
                    <Text style={styles.calrowitem}>Kcal: {item.kcal_sum.toFixed(2)}</Text>
                    <Text style={styles.calrowitem}>Kj: {item.kj_sum.toFixed(2)}</Text>
                    <Text style={styles.calrowitem}>Rasvaa: {item.fat_sum.toFixed(2)}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};
export default CalendarItem;
