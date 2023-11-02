import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "space-between",
        // alignItems: "stretch",
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
        width:"100%"
    },
    containerFavorite: {
        flex: 1,
        // justifyContent: "space-between",
        // alignItems: "stretch",
        flexDirection: "column",
        padding: 4,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 4,
        borderColor: "#CCCCCC",
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: "#FFFFFF",
        borderLeftWidth:8,
        borderLeftColor:"#FF5733",
        shadowColor: "#CCCCCC",
        shadowRadius: 4,
        width:"100%"
    },
    name: {
        flex: 1,
        fontWeight: "bold"
    },
    calrow: {
        flex: 1,
        paddingTop: 8,
        // justifyContent: "space-around",
        flexDirection: "row",
        width:"100%"
    },
    calrowitem: {
        // flex: 1,
        // minWidth: 110,

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