import { StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        backgroundColor:"#F5FFF1"
    },
    mainTitle: {
        alignSelf:"center",
        marginBottom:2,
        fontSize:22,
        fontWeight:"bold"
    },
    title: {
        alignSelf:"flex-start",
        marginBottom:2
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#256D08',
        borderWidth: 1,
        marginBottom: 6,
        paddingLeft: 10,
        borderRadius: 12,
        backgroundColor:"#F9F9F9"
    },
    buttobContainer:{
        flex:1,
        maxHeight:80,
        flexDirection:"row",
        alignItems:"baseline",
        // borderWidth:2
    },
    button: {
        backgroundColor: '#256D08',
        borderRadius: 12,
        marginTop:20,
        padding: 10,
        margin:4,
        width:100,
        alignSelf:"flex-end"
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
      },
})
export default styles;