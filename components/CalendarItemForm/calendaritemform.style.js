import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "baseline",
    flexDirection: "column",
    padding: 4,
    width:"100%",
    marginLeft: 0,
    marginRight: 0,
    marginTop: 1,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    shadowColor: "#CCCCCC",
    shadowRadius: 4,
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
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    padding: 0,
    paddingTop: 54,
},


})
export default styles;