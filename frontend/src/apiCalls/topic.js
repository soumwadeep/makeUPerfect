import axios from "axios";

export const getTopics = async () => {
  try {
    const res = await axios.get("/api/topics");
    return res;
  } catch (err) {
    return err;
  }
};

export const createTopic = async (todo) => {
  try {
    const res = await axios.post("/api/topics/create", todo);
    return res;
  } catch (err) {
    return err;
  }
};

export const getTopic = async (id) => {
  try {
    const res = await axios.get(`/api/topics/${id}`);
    return res;
  } catch (err) {
    return err;
  }
};

export const updateTopic = async (id, todo) => {
  try {
    const res = await axios.put(`/api/topics/update/${id}`, todo);
    return res;
  } catch (err) {
    return err;
  }
};

export const deleteTopic = async (id) => {
  try {
    const res = await axios.delete(`/api/topics/delete/${id}`);
    return res;
  } catch (err) {
    return err;
  }
};
