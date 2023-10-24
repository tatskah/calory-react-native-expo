import http from '../db';
import { View, Text } from 'react-native';

class FoodItemsService {

    getFoodItems() {
        return http.get('/fooditems');
    }

}
export default new FoodItemsService();