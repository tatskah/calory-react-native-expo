import { View, Text, ScrollView } from "react-native";
import styles from "./homegraph.style";
import { useState, useEffect } from "react";
import FoodItemsService from "../../services/fooditems.service";

const HomeGraph = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // setIsLoading(true);

    try {
      const resp = await FoodItemsService.getFoodItems();
      setData(JSON.stringify(resp.data));
      // setIsLoading(false);
    } catch (error) {
      // setError(error);
      console.log(error);
    } finally {
      // setIsLoading(false);
    }
  };

  return (
    <ScrollView>
      <View>
        <Text>{data}</Text>
      </View>
    </ScrollView>
  );
};
export default HomeGraph;
