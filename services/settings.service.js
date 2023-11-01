import http from '../db';

class SettingsService{

    getSettings(){
        return http.get('/settings');
    }

    update(data) {
        const headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        }
        return http.post(`/settings`, data, { headers });
    }

}
export default new SettingsService();