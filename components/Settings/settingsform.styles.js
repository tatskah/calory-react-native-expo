import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: "column",
        alignItems: 'center',
        padding: 20,
        backgroundColor: "#F5FFF1"
    },
    appHeader: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: '#1F6702',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
    },
    appHeaderText: {
        fontSize: 18,
        textAlign: "left",
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
    buttonContainer: {
        flex: 1,
        // maxHeight: 80,
        // width: "100%",
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "space-between",
        // borderWidth:2
        marginTop:10,
    },
    buttonGreen: {
        flex:1,
        backgroundColor: '#1F6702',
        borderRadius: 4,
        padding: 6,
        margin: 4,
        width: "31%",
        height:36,
        alignSelf: "flex-start"
    },
    buttonRed: {
        flex:1,
        backgroundColor: '#D60037',
        alignItems:"center",
        borderRadius: 4,
        padding: 6,
        margin: 4,
        width: "31%",
        height:36,
        alignSelf: "flex-start"
    },
    buttonText: {
        paddingTop:1,
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
})
export default styles;