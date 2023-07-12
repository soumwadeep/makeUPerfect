import express from "express";
import {
  register,
  login,
  logout,
  getMe,
  updateDetails,
  updatePassword,
  deleteUser,
} from "../controllers/usersController.js";
import authorize from "../middleware/authorize.js";
import {
  loginRules,
  registerRules,
  updateDetailsRules,
  updatePasswordRules,
} from "../middleware/validator.js";
import { validateResult } from "../middleware/validationResults.js";

const router = express.Router();

router.post("/register", registerRules, validateResult, register);

router.post("/login", loginRules, validateResult, login);

router.get("/logout", authorize, logout);

router.get("/me", authorize, getMe);

router.put(
  "/updatedetails",
  authorize,
  updateDetailsRules,
  validateResult,
  updateDetails
);

router.put(
  "/updatepassword",
  authorize,
  updatePasswordRules,
  validateResult,
  updatePassword
);

router.delete("/delete", authorize, deleteUser);

export default router;
