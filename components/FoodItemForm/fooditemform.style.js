import { StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        backgroundColor: "#F5FFF1"
    },
    mainTitle: {
        alignSelf: "center",
        marginBottom: 2,
        fontSize: 22,
        fontWeight: "bold"
    },
    title: {
        alignSelf: "flex-start",
        marginBottom: 2
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#256D08',
        borderWidth: 1,
        marginBottom: 6,
        paddingLeft: 10,
        borderRadius: 4,
        backgroundColor: "#F9F9F9"
    },
    buttobContainer: {
        flex: 1,
        maxHeight: 80,
        width: "100%",
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "space-between"
        // borderWidth:2
    },
    button: {
        backgroundColor: '#256D08',
        borderRadius: 4,
        marginTop: 20,
        padding: 10,
        margin: 4,
        width: "31%",
        alignSelf: "flex-end"
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    buttonRed: {
        backgroundColor: '#D60037',
        borderRadius: 4,
        marginTop: 20,
        padding: 10,
        margin: 4,
        width: "31%",
        alignSelf: "flex-end"
    },
    appHeader: {
        backgroundColor: '#1F6702',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
    },
    appHeaderText: {
        fontSize: 18,
        textAlign: "center",
        padding: 8,
        color: "#98FF6F",
        backgroundColor: "#1F6702"
    },
    content: {
        alignContent: "center",
        justifyContent: "center",
        width: "100%",
        padding: 0,
        paddingTop: 54,
    },
})
export default styles;