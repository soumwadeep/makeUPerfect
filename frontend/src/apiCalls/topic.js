import axios from "axios";
axios.defaults.withCredentials = true;
const API_URI = "http://3.109.139.206:4000";

export const getTopics = async () => {
  try {
    const res = await axios.get(`${API_URI}/api/topics`);
    return res;
  } catch (err) {
    return err;
  }
};

export const createTopic = async (todo) => {
  try {
    const res = await axios.post(`${API_URI}/api/topics/create`, todo);
    return res;
  } catch (err) {
    return err;
  }
};

export const getTopic = async (id) => {
  try {
    const res = await axios.get(`${API_URI}/api/topics/${id}`);
    return res;
  } catch (err) {
    return err;
  }
};

export const updateTopic = async (id, todo) => {
  try {
    const res = await axios.put(`${API_URI}/api/topics/update/${id}`, todo);
    return res;
  } catch (err) {
    return err;
  }
};

export const deleteTopic = async (id) => {
  try {
    const res = await axios.delete(`${API_URI}/api/topics/delete/${id}`);
    return res;
  } catch (err) {
    return err;
  }
};
