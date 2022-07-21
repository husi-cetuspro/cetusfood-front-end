import axios from "axios";
import variables from "../assets/variables.json";

export const getRestaurants = async (token) => {
  return await axios.get(`${variables.proxy}/user/restaurants`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const getRestaurantsByName = async (name, token) => {
  return await axios.get(`${variables.proxy}/user/restaurants/name/${name}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const getRestaurantsById = async (id, token) => {
  return await axios.get(`${variables.proxy}/user/restaurants/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const deleteRestaurant = async (id, token) => {
  await axios.delete(`${variables.proxy}/admin/restaurants/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const addRestaurant = async (data, token) => {
  if (data.name && data.url && data.email) {
    await axios.post(`${variables.proxy}/admin/restaurants`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
};
export const editRestaurant = async (id, data, token) => {
  if (id && data.name && data.url && data.email) {
    await axios.put(`${variables.proxy}/admin/restaurants/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
};
export const addOrder = async (input, token) => {
  await axios.post(
    `${variables.proxy}/user/orders`,
    input,
    { headers: { Authorization: `Bearer ${token}` } }
  );
};
export const getProducts = async (restId, token) => {
  return await axios.get(
    `${variables.proxy}/user/restaurants/products/${restId}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
};
export const deleteProduct = async (productId, token) => {
  await axios.delete(
    `${variables.proxy}/admin/restaurants/product/${productId}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
};
export const addProduct = async (data, token) => {
  await axios.post(`${variables.proxy}/admin/restaurants/product`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
export const editProduct = async (data, prodId, token) => {
    console.log(data)
    await axios.put(
        `${variables.proxy}/admin/restaurants/product/${prodId}`,
        data,
        { headers: { Authorization: `Bearer ${token}` } }
    )
}