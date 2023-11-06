import { StyleSheet } from "react-native";
import { SIZES } from '../../constants'
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
    flex: 1,
    padding: 0,
    paddingTop: 40,
    marginBottom:54

  },
  searchInput: {
    height: SIZES.search_icon,
    width:200,
    borderRadius: 4,
    backgroundColor: "#98FF6F",
    color:"#FFF",

  },
  search_icon: {
    width: SIZES.search_icon,
    height: SIZES.search_icon,
    marginRight:2,
    marginLeft:12

  },
  new_icon: {
    width: SIZES.search_icon,
    height: SIZES.search_icon,
    marginRight:12,
    marginLeft:2

  },
  empty_list_content:{
    justifyContent:"center", 
    backgroundColor:"#1F6702",
    shadowColor: "#98FF6F",
    borderColor:"#98FF6F",
    shadowRadius:4,
    width:300,
    height:100,
    borderWidth:2,
    marginTop:"50%",
    borderRadius:12,
  },
  empty_text:{
    alignSelf:"center",
    color: "#98FF6F",
    fontSize:28,
    textAlign:"center",
    
  },

});
export default styles;