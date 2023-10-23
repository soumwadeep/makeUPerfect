import axios from "axios";
axios.defaults.withCredentials = true;
const API_URI = "http://localhost:4006";

export const register = async (user) => {
  try {
    const res = await axios.post(`${API_URI}/api/users/register`, user);
    return res;
  } catch (err) {
    return err;
  }
};

export const login = async (user) => {
  try {
    const res = await axios.post(`${API_URI}/api/users/login`, user);
    return res;
  } catch (err) {
    return err;
  }
};

export const logout = async () => {
  try {
    const res = await axios.get(`${API_URI}/api/users/logout`);
    return res;
  } catch (err) {
    return err;
  }
};

export const getUser = async () => {
  try {
    const res = await axios.get(`${API_URI}/api/users/me`);
    return res;
  } catch (err) {
    return err;
  }
};

export const updateUser = async (user) => {
  try {
    const res = await axios.put(`${API_URI}/api/users/updatedetails`, user);
    return res;
  } catch (err) {
    return err;
  }
};

export const updatePassword = async (data) => {
  try {
    const res = await axios.put(`${API_URI}/api/users/updatepassword`, data);
    return res;
  } catch (err) {
    return err;
  }
};

export const deleteUser = async () => {
  try {
    const res = await axios.delete(`${API_URI}/api/users/delete`);
    return res;
  } catch (err) {
    return err;
  }
};
