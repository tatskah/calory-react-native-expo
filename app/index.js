import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { useState, useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import { FoodCalendar, FoodItems, HomePage, Report,HomeGraph, FoodItemForm } from '../components';
import * as Font from 'expo-font';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from "@react-navigation/native";
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

const Index = () => {
    const [currentDate, setCurrentDate] = useState('');
    const router = useRouter();

    const loadFonts = async () => {
        await Font.loadAsync({
            MaterialCommunityIcons: MaterialCommunityIcons
        });
    };

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
        <View style={{ flex:1 , backgroundColor:"#F4F4F4"}}>
            <Stack.Screen options={{ headerTitle: "KALORI" }}>
                
                
            </Stack.Screen>

            <NavigationContainer independent={true}>
                <Tab.Navigator 
                    activeColor="#8B0711" 
                    inactiveColor="#085B08"
                    barStyle={{ backgroundColor: '#E1F6EB' }}

                    >
                    <Tab.Screen name='Home' component={HomeGraph}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name='home' color={color} size={26} />
                            )
                        }}
                    />
                    <Tab.Screen name='FoodCalendar' component={FoodCalendar}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name='calendar-month-outline' color={color} size={26} />
                            )
                        }}
                    />
                    <Tab.Screen name='FoodItems' component={FoodItems}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name='food-fork-drink' color={color} size={26} />
                            )
                        }}
                    />
                    <Tab.Screen name='Report' component={FoodItemForm}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons name='nas' color={color} size={26} />
                            )
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        
        </View>

    );
}
export default Index;
