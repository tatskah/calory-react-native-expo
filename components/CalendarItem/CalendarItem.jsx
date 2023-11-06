import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Pressable,
    Image,
    TouchableOpacity
} from "react-native";
import moment from 'moment';
import * as Progress from 'react-native-progress';
import styles from "./calendaritem.style";
import { icons } from '../../constants';


const CalendarItem = ({ item, navigation }) => {
    const [data, setData] = useState(item);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {

    }, []);

    const handleImageClick = () =>{

        navigation.navigate("CalendarItemForm", { id: item.id });
    } 

    return (

        <View style={styles.content}>
            <Pressable style={styles.container}
                onPress={() => setIsExpanded(!isExpanded)}
            >

                <View style={isExpanded ? styles.item_title_expanded : styles.item_title}>
                    <Text styles={styles.name}>{moment(item.add_date).format('DD.MM.YYYY HH:ss')}</Text>
                    <Progress.Bar
                        // key={'prog-' + item.id}
                        style={styles.progress}
                        progress={Number((item.kcal_sum / 1200).toFixed(1))}
                        height={13}
                        width={100}
                        color="#98FF6F"
                        unfilledColor="#20AF61"
                        borderColor="#1F6702"
                    />
                    <TouchableOpacity onPress={handleImageClick}>
                        <Image source={icons.edit} style={{ width: 24, height: 24, borderWidth: 1, borderRadius: 6, borderColor: "#1F6702" }} />
                    </TouchableOpacity>
                </View>

                <View style={isExpanded ? styles.calrowExpanded : styles.calrow}>
                    <Text style={[styles.calrowitem, { flex: 1 }]}>Kcal: {item.kcal_sum ? item.kcal_sum.toFixed(2) : 0}</Text>
                    <Text style={[styles.calrowitem, { flex: 1 }]}>Kj: {item.kj_sum ? item.kj_sum.toFixed(2) : 0}</Text>
                    <Text style={[styles.calrowitem, { flex: 1 }]}>Rasvaa: {item.fat_sum ? item.fat_sum.toFixed(2) : 0}</Text>
                </View>

                {isExpanded ? (
                    <View style={isExpanded ? styles.calrowExpanded : styles.calrow}>
                        <Text style={[styles.calrowitem, { flex: 1 }]}>Proteiinia: {item.protein_sum ? item.protein_sum.toFixed(2) : 0}</Text>
                        <Text style={[styles.calrowitem, { flex: 2 }]}>Hiilihydraattia: {item.carbohydrate_sum ? item.carbohydrate_sum.toFixed(2) : 0}</Text>
                    </View>
                ) : null}

                {isExpanded ? (
                    <View style={isExpanded ? styles.foodrowExpanded : styles.foodrow}>
                        {item.CalendarItems.map((el, i) => {
                            return (
                                <View key={item.id + '-' + i}>
                                    <View>
                                        <Text style={styles.calrowitem}>{el.name}</Text>
                                        <View key={'food-' + item.id + '-' + el.id} style={styles.foodrow_content}>
                                            <Text key={'f1-' + item.id + '-' + el.id} style={[styles.foodrowitem, { flex: 1 }]}>kpl: {el.piece}</Text>
                                            <Text key={'f2-' + item.id + '-' + el.id} style={[styles.foodrowitem, { flex: 1 }]}>g: {el.gram}</Text>
                                            <Text key={'f3-' + item.id + '-' + el.id} style={[styles.foodrowitem, { flex: 2 }]}>Kcal: {el.kcal ? el.kcal.toFixed(2) : 0}</Text>
                                            <Text key={'f4-' + item.id + '-' + el.id} style={[styles.foodrowitem, { flex: 2 }]}>Kj: {el.kj ? el.kj.toFixed(2) : 0}</Text>
                                        </View>
                                    </View>
                                </View>
                            );
                        })}
                    </View>
                ) : null}

            </Pressable>
        </View>
    );
};
export default CalendarItem;
