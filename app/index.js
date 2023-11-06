import { View, Image, useWindowDimensions } from "react-native";
import { useState, useEffect } from "react";
import { Stack, useRouter, useNavigation } from "expo-router";
import { FoodCalendar, FoodItems, Report, HomeGraph, FoodItemForm, Settings, CalendarItemForm } from '../components';
import { icons } from '../constants';
import styles from '../styles';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabView, SceneMap } from 'react-native-tab-view';

const Index = () => {
    const [currentDate, setCurrentDate] = useState('');
    const router = useRouter();
    const navigation = useNavigation();
    const Tab = createBottomTabNavigator();
    const HomeStack = createNativeStackNavigator();

    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
    ]);

    const FirstRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
    );

    const SecondRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
    );

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

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
                // height: 40,
            }}
            />

            {/* <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
            /> */}

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
                            tabBarButton: () => null,
                            tabBarVisible: false,
                            tabBarIcon: ({ color, size }) => (
                                <Image source={icons.report} style={styles.toolbar_bottom_icon} />
                            )
                        }}
                    />
                    <Tab.Screen name='CalendarItemForm' component={CalendarItemForm}
                        options={{
                            tabBarButton: () => null,
                            tabBarVisible: false,
                            tabBarIcon: ({ color, size }) => (
                                <Image source={icons.report} style={styles.toolbar_bottom_icon} />
                            )
                        }}
                    />
                    <Tab.Screen name='Report' component={Report}
                        options={{
                            tabBarLabel: "Raportti",
                            tabBarIcon: () => (
                                <Image source={icons.report} style={styles.toolbar_bottom_icon} />
                            )
                        }}
                    />
                    <Tab.Screen name="Settings" component={Settings}
                        options={{
                            tabBarLabel: "Asetukset",
                            tabBarIcon: () => (
                                <Image source={icons.settings} style={styles.toolbar_bottom_icon} />
                            )
                        }}

                    />

                </Tab.Navigator>
            </NavigationContainer>

        </View>

    );
}
export default Index;
