import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./report.style";

const Report = () => {
    return (

        <View style={styles.container}>

            <View style={styles.appHeader}>
                <Text style={styles.appHeaderText}>Raportti</Text>
            </View>


        </View>


    );
};
export default Report;
