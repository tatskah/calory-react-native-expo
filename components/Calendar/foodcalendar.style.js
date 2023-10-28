import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "columns",
        padding: 4,
        paddingTop: 12,
        borderRadius: 0,
        backgroundColor: "#F5FFF1",
        shadowColor: "#FFF",
      },
    appHeader: {
        flex:1,
        backgroundColor: '#1F6702',
        height: 50,
        alignItems: 'flex-start',
        justifyContent: 'center',
        alignSelf:"flex-start",
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
        flex: 1,
        padding: 0,
        paddingTop: 40,
    
      },
});
export default styles;