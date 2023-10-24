import { StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "baseline",
        flexDirection: "column",
        padding: 4,
        marginLeft: 4,
        marginRight: 4,
        marginTop:4,
        borderColor:"#CCCCCC",
        borderWidth:1,
        borderRadius: 4,
        backgroundColor: "#FFFFFF",
        shadowColor: "#CCCCCC",
        shadowRadius:10,
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 10,
        height: 100, // Adjust the height as needed
        borderWidth: 1,
        borderColor: '#ccc',
      },
    name: {
        flex: 1,
        fontWeight:"bold"
    },
    calrow: {
        paddingTop:8,
        flex: 1,
        justifyContent: "space-between",
        flexDirection:"row",
    },
    calrowitem: {
        flex: 1,
        minWidth: 90,
        
    },
    separator: {
        height: 1,
        backgroundColor: 'lightgray',
        width:300,
    
      },
});
export default styles;