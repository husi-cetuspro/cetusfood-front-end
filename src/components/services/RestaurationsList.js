import axios from "axios";
export const getRestaurants = async () => {
    return await axios.get('http://192.168.0.246:3000/restaurants');
}
export const getRestaurantsByName = async (name) => {
    return await axios.get(`http://192.168.0.246:3000/restaurants/name/${name}`);
}
export const deleteRestaurant = async (id) => {
    await axios.delete(`http://192.168.0.246:3000/restaurants/${id}`);
}
export const addRestaurant = async (data) => {
    if(data.name && data.url && data.email){
        await axios.post('http://192.168.0.246:3000/restaurants', data);
    }
}