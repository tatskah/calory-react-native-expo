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
  name: {
    fontWeight:"bold",
    fontSize:12,
    
  },
  item_title: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%"
  },
  item_title_expanded: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#98FF6F",
    padding: 4,
    paddingTop:8,
    borderLeftColor: "#1F6702",
    borderLeftWidth: 4
  },
  calrow: {
    paddingTop: 8,
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  foodrow: {
    paddingTop: 8,
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  calrowExpanded: {
    paddingTop: 8,
    flexDirection: "row",
    backgroundColor: "#98FF6F",
    padding: 4,
    borderLeftColor: "#1F6702",
    borderLeftWidth: 4,
    width: "100%",
  },
  foodrowExpanded: {
    paddingTop: 8,
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
    backgroundColor: "#E6FCC3",
    padding: 4,
    borderLeftColor: "#1F6702",
    borderLeftWidth: 4,
    width: "100%",
  },
  calrowitem: {
    // minWidth: 110,
  },
  foodrow_content: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor:"#555",
    borderStyle:"dotted",
    justifyContent: "space-between",
  },
  foodrowitem: {
    // minWidth: 80,
  },
  progressBar: {
    width: '100%',
    height: 24,
    backgroundColor: '#ccc',
    borderRadius: 15,
    overflow: 'hidden',
  },
  progress: {
    marginRight: 6,
    marginBottom: 3
  },
  progressText: {
    fontSize: 10,
    color: "#FFFFFF"
  },

});
export default styles;