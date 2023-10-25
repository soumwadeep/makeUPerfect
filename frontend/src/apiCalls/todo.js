import axios from "axios";
axios.defaults.withCredentials = true;
const API_URI = "https://makeuperfectdb.onrender.com/";

export const getTodos = async () => {
  try {
    const res = await axios.get(`${API_URI}/api/todos`);
    return res;
  } catch (err) {
    return err;
  }
};

export const createTodo = async (todo) => {
  try {
    const res = await axios.post(`${API_URI}/api/todos/create`, todo);
    return res;
  } catch (err) {
    return err;
  }
};

export const getTodo = async (id) => {
  try {
    const res = await axios.get(`${API_URI}/api/todos/${id}`);
    return res;
  } catch (err) {
    return err;
  }
};

export const updateTodo = async (id, todo) => {
  try {
    const res = await axios.put(`${API_URI}/api/todos/update/${id}`, todo);
    return res;
  } catch (err) {
    return err;
  }
};

export const deleteTodo = async (id) => {
  try {
    const res = await axios.delete(`${API_URI}/api/todos/delete/${id}`);
    return res;
  } catch (err) {
    return err;
  }
};
