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
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    margin: 4,
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
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
    padding: 0,
    paddingTop: 40,
    
  },
});
export default styles;