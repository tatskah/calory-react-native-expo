import { View, ScrollView, SafeAreaView, Text, Image, } from "react-native";
import { useState, useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import { FoodCalendar, FoodItems, HomePage, Report, HomeGraph, FoodItemForm } from '../components';

import { icons, SIZES } from '../constants';
import styles from '../styles';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from "@react-navigation/native";
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const Index = () => {


    const Tab = createBottomTabNavigator();

    function HomeStackGroup(){
        return (
            <View></View>

        );
    }



    const [currentDate, setCurrentDate] = useState('');
    const router = useRouter();

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

        <View style={{ flex: 1, backgroundColor: "#DDD" }}>
            <Stack.Screen options={{
                headerTitle: "KALORI",
                backgroundColor: "#98FF6F",
                height: 20
            }}
            />

            <NavigationContainer independent={true}>
                <Tab.Navigator
                    initialRouteName="FoodCalendar"
                    screenOptions={({ route }) => ({
                        headerShown: false,
                        tabBarStyle: {
                            height: 50,
                            paddingHorizontal: 2,
                            paddingTop: 0,
                            borderBottomColor: "#98FF6F",
                            shadowRadius: 8,
                            inactiveColor: styles.tab_navi_bottom.inactiveColor,
                            paddingBottom: 4,
                            backgroundColor: styles.tab_navi_bottom.backgroundColor,
                            position: 'absolute',
                            borderTopWidth: 1,
                            borderTopColor: styles.tab_navi_bottom.inactiveColor
                        }
                    })}
                >
                    <Tab.Screen name='Home' component={HomeGraph}
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: () => (
                                <Image source={icons.home} style={styles.toolbar_bottom_icon} />
                            )
                        }}
                    />
                    <Tab.Screen name='FoodCalendar' component={FoodCalendar}
                        options={{
                            tabBarLabel: "Calendar",
                            tabBarIcon: () => (
                                <Image source={icons.food2} style={styles.toolbar_bottom_icon} />
                            )
                        }}
                    />
                    <Tab.Screen name='FoodItems' component={FoodItems}
                        options={{
                            tabBarLabel: "Food",
                            tabBarIcon: () => (
                                <Image source={icons.food1} style={styles.toolbar_bottom_icon} />
                            )
                        }}
                    />
                    <Tab.Screen name='FoodItemForm' component={FoodItemForm} 
                        options={{
                            
                            tabBarLabel: "Edit",
                            tabBarVisible: false,
                            tabBarShowLabel: false,
                            tabBarIcon: ({ color, size }) => (
                                <Image source={icons.report} style={styles.toolbar_bottom_icon} />
                            )
                        }}

                    />
                    <Tab.Screen name='Report' component={Report}
                        options={{
                            tabBarLabel: "Report",
                            tabBarIcon: () => (
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
