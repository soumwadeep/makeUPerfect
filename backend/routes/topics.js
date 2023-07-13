import express from "express";
import authorize from "../middleware/authorize.js";
import {
  getTopic,
  getTopics,
  createTopic,
  updateTopic,
  deleteTopic,
} from "../controllers/topicController.js";
import { createTopicRules, updateTopicRules } from "../middleware/validator.js";
import { validateResult } from "../middleware/validationResults.js";

const router = express.Router();

router.get("/:id", authorize, getTopic);

router.get("/", authorize, getTopics);

router.post("/create", authorize, createTopicRules, validateResult, createTopic);

router.put(
  "/update/:id",
  authorize,
  updateTopicRules,
  validateResult,
  updateTopic
);

router.delete("/delete/:id", authorize, deleteTopic);

export default router;
