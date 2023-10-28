import { StyleSheet } from "react-native";


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
    item_title:{
        flex:1,
        justifyContent: "space-between",
        alignItems:"center",
        flexDirection: "row",
        borderBottomWidth:1,
        borderBottomColor:"#CCC",
        borderBottomRightRadius:10,
        width:"100%"
    },
    calrow: {
        paddingTop: 8,
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
    },
    calrowitem: {
        flex: 1,
        minWidth: 110,

    },
    progressBar: {
        width: '100%',
        height: 24,
        backgroundColor: '#ccc',
        borderRadius: 15,
        overflow: 'hidden',
      },
      progress: {
        marginRight:6,
        marginBottom:3
      },
      progressText:{
        fontSize:10,
        color:"#FFFFFF"
      }

});
export default styles;