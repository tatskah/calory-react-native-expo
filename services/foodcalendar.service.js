import http from '../db';

class FoodCalendarService {

    getFoodCalendarItems(){
        return http.get('/foodcalendar');
    }


}
export default new FoodCalendarService;