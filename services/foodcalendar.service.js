import http from '../db';

class FoodCalendarService {

    getFoodCalendarItems(){
        return http.get('/foodcalendar');
    }

    getFoodCalendarItemById(id){
        return http.get(`foodcalendar/${id}`);
    }

}
export default new FoodCalendarService;