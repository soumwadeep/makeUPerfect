import Topic from "../models/Topic.js";

export const getTopics = async (req, res) => {
  try {
    const topics = await Topic.find({ user: req.user });
    res.status(200).json({ msg: "Topic Found", topics });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ errors: "Internal Server Error" });
  }
};

export const getTopic = async (req, res) => {
  const { id } = req.params;
  try {
    const topic = await Topic.findById(id);
    if (!topic) {
      res.status(404).json({ msg: "Topic Not Found" });
    }
    if (topic.user.toString() !== req.user) {
      res.status(401).json({ msg: "You Are Not Authorized" });
    }
    res.status(200).json({ msg: "Topic Found", topic });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ errors: "Internal Server Error" });
  }
};

export const createTopic = async (req, res) => {
  const { heading, brief } = req.body;
  try {
    const topic = await Topic.create({
      heading,
      brief,
      user: req.user,
    });
    res.status(201).json({ msg: "Topic Created Successfully", topic });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ errors: "Internal Server Error" });
  }
};

export const updateTopic = async (req, res) => {
  const { id } = req.params;
  const { heading, brief } = req.body;
  try {
    const topic = await Topic.findById(id);
    if (!topic) {
      return res.status(404).json({ msg: "Topic Not Found" });
    }
    if (topic.user.toString() !== req.user) {
      return res.status(401).json({ msg: "Not Authorized" });
    }
    topic.heading = heading;
    topic.brief = brief;
    await topic.save();
    res.status(200).json({ msg: "Topic Updated Successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ errors: "Internal Server Error" });
  }
};

export const deleteTopic = async (req, res) => {
  const { id } = req.params;
  try {
    const topic = await Topic.findById(id);
    if (!topic) {
      return res.status(404).json({ msg: "Topic Not Found" });
    }
    if (topic.user.toString() !== req.user) {
      return res.status(401).json({ msg: "Not Authorized" });
    }
    await Topic.deleteOne({ _id: id });
    res.status(200).json({ msg: "Topic Deleted Successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ errors: "Internal Server Error" });
  }
};
