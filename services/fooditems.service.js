import http from '../db';
import { View, Text } from 'react-native';

class FoodItemsService {

    getFoodItems() {
        return http.get('/fooditems');
    }

    getFoodItemsById(id) {
        return http.get(`/fooditems/${id}`);
    }

    getFoodItemsByName(name) {
        return http.get(`/fooditems?name=${name}`);
    }

    updateFoodItem(id, data) {
        const headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        }
        return http.put(`/fooditems/${id}`, data, { headers });
    }

    saveFoodItem(data) {
        const headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        }
        return http.post("/fooditems", data, { headers });
    }

    deleteById(id){
        return http.delete(`/fooditems/${id}`);
    }
    
}
export default new FoodItemsService();