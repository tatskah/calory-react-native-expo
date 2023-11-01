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
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        console.log(item);
    }, []);

    return (

        <View style={styles.content}>
            <TouchableOpacity
                onPress={() => setIsExpanded(!isExpanded)}
                style={styles.container}
            >

                <View key={'main-' + item.id} style={isExpanded ? styles.item_title_expanded : styles.item_title}>
                    {/* <Text styles={styles.name}>{format(item.add_date,'dd.MM.YYYY')}</Text> */}
                    <Text key={'header-' + item.id} styles={styles.name}>{item.add_date}</Text>
                    <Progress.Bar
                        key={'prog-' + item.id}
                        style={styles.progress}
                        progress={Number((item.kcal_sum / 1200).toFixed(1))}
                        height={13}
                        width={100}
                        color="#98FF6F"
                        unfilledColor="#20AF61"
                        borderColor="#1F6702"
                    />
                </View>

                <View key={'calrow-' + item.id} style={isExpanded ? styles.calrowExpanded : styles.calrow}>
                    <Text key={'fkcal-' + item.id} style={[styles.calrowitem,{flex:1}]}>Kcal: {item.kcal_sum ? item.kcal_sum.toFixed(2) : 0}</Text>
                    <Text key={'kj-' + item.id} style={[styles.calrowitem,{flex:1}]}>Kj: {item.kj_sum ? item.kj_sum.toFixed(2) : 0}</Text>
                    <Text key={'fat-' + item.id} style={[styles.calrowitem,{flex:1}]}>Rasvaa: {item.fat_sum ? item.fat_sum.toFixed(2) : 0}</Text>
                </View>

                {isExpanded ? (
                    <View key={'calrow2-' + item.id} style={isExpanded ? styles.calrowExpanded : styles.calrow}>
                        <Text key={'prot-' + item.id} style={[styles.calrowitem,{flex:1}]}>Proteiinia: {item.protein_sum ? item.protein_sum.toFixed(2) : 0}</Text>
                        <Text key={'carbo-' + item.id} style={[styles.calrowitem,{flex:2}]}>Hiilihydraattia: {item.carbohydrate_sum ? item.carbohydrate_sum.toFixed(2) : 0}</Text>
                    </View>
                ) : null}

                {isExpanded ? (
                    <View key={'food-' + item.id} style={isExpanded ? styles.foodrowExpanded : styles.foodrow}>
                        {item.CalendarItems.map((el) => {
                            return (
                                <>
                                    <Text key={'txt-' + item.id + '-' + el.id} style={styles.calrowitem}>{el.name}</Text>
                                    <View key={'food-' + item.id + '-' + el.id} style={styles.foodrow_content}>
                                        <Text key={'f1-' + item.id + '-' + el.id} style={[styles.foodrowitem, { flex: 1 }]}>kpl: {el.piece}</Text>
                                        <Text key={'f2-' + item.id + '-' + el.id} style={[styles.foodrowitem, { flex: 1 }]}>g: {el.gram}</Text>
                                        <Text key={'f3-' + item.id + '-' + el.id} style={[styles.foodrowitem, { flex: 2 }]}>Kcal: {el.kcal ? el.kcal.toFixed(2) : 0}</Text>
                                        <Text key={'f4-' + item.id + '-' + el.id} style={[styles.foodrowitem, { flex: 2 }]}>Kj: {el.kj ? el.kj.toFixed(2) : 0}</Text>
                                    </View>

                                </>
                            )
                        })}
                    </View>

                ) : null}

            </TouchableOpacity>
        </View>
    );
};
export default CalendarItem;
