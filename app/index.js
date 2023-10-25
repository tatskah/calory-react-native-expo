import { View, ScrollView, SafeAreaView, Text, Image, } from "react-native";
import { useState, useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import { FoodCalendar, FoodItems, HomePage, Report, HomeGraph, FoodItemForm } from '../components';

import { icons, SIZES } from '../constants';
import styles from '../styles';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from "@react-navigation/native";
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

const Index = () => {
    const [currentDate, setCurrentDate] = useState('');
    const router = useRouter();

    // const loadFonts = async () => {
    //     await Font.loadAsync({
    //         MaterialCommunityIcons: MaterialCommunityIcons
    //     });
    // };

    useEffect(() => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        setCurrentDate(date + '.' + month + '.' + year + ' ' + hours + ':' + min + ':' + sec);
    }, []);


    return (

        <View style={{ flex: 1, backgroundColor: "#F4F4F4" }}>
            <Stack.Screen options={{ headerTitle: "KALORI" }} />

            <NavigationContainer independent={true}>
                <Tab.Navigator
                    activeColor={styles.tab_navi_bottom.activeColor}
                    inactiveColor={styles.tab_navi_bottom.inactiveColor}
                    barStyle={{ backgroundColor: styles.tab_navi_bottom.backgroundColor }}

                >
                    <Tab.Screen name='HomeGraph' component={HomeGraph}
                        options={{
                            tabBarIcon: () => (
                                <Image source={icons.home} style={styles.toolbar_bottom_icon} />
                            )
                        }}
                    />
                    <Tab.Screen name='FoodCalendar' component={FoodCalendar}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <Image source={icons.food2} style={styles.toolbar_bottom_icon} />
                            )
                        }}
                    />
                    <Tab.Screen name='FoodItems' component={FoodItems}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <Image source={icons.food1} style={styles.toolbar_bottom_icon} />
                            )
                        }}
                    />
                    {/* <Tab.Screen name='FoodItemForm' component={FoodItemForm}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <Image source={icons.report} style={styles.toolbar_bottom_icon} />
                            )
                        }}
                    /> */}
                    <Tab.Screen name='Report' component={Report}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <Image source={icons.report} style={styles.toolbar_bottom_icon} />
                            )
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>

        </View>

    );
}
export default Index;
