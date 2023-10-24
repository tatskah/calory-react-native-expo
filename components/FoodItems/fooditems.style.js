import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: 12,
        borderRadius: 8,
        backgroundColor: "#FFF",
        
        shadowColor: "#FFF",
      },
      item: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection:"column",
        flexWrap:"wrap",
        margin: 10,
        height: 100, // Adjust the height as needed
        borderWidth: 1,
        borderColor: '#ccc',
      },
});
export default styles;