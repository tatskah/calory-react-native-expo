import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "stretch",
        flexDirection: "columns",
        padding: 4,
        paddingTop: 12,
        borderRadius: 0,
        backgroundColor: "#F5FFF1",
        shadowColor: "#FFF",
    },
    appHeader: {
        backgroundColor: '#1F6702',
        height: 50,
        alignItems: 'flex-start',
        justifyContent: 'center',
        alignSelf: "flex-start",
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
        paddingTop: 44,
        marginBottom: 54,
        flexDirection:"row",
    },
    empty_list_content: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: 40,
        backgroundColor: "#98FF6F"
    },
    empty_text: {
        alignSelf: "center",
        width: "100%",
        fontSize: 24,
        height: 50,
        padding: 10,
        justifyContent: "center",

    }
});
export default styles;