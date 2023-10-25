import { StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "baseline",
        flexDirection: "column",
        padding: 4,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 4,
        borderColor: "#CCCCCC",
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: "#FFFFFF",
        shadowColor: "#CCCCCC",
        shadowRadius: 4,
    },
    name: {
        flex: 1,
        fontWeight: "bold"
    },
    calrow: {
        paddingTop: 8,
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
    },
    calrowitem: {
        flex: 1,
        minWidth: 90,

    },
    separator: {
        height: 1,
        backgroundColor: 'lightgray',
        width: "100%",

    },
    item_title:{
        borderBottomWidth:1,
        borderBottomColor:"#CCC",
        borderBottomRightRadius:10,
        width:"100%"
    }
});
export default styles;