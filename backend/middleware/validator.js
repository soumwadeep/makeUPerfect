import { check } from "express-validator";

export const registerRules = [
  check("name", "Name Is Required").notEmpty().trim().escape(),
  check("phone", "Mobile No. Is Required")
    .notEmpty()
    .trim()
    .escape()
    .isNumeric(),
  check("email", "Please Enter Your Email").isEmail().normalizeEmail(),
  check("password", "Password Should Be Of 6 Or More Characters").isLength({
    min: 6,
  }),
  check("age", "Age Is Required").notEmpty().trim().escape().isNumeric(),
];

export const loginRules = [
  check("email", "Please Enter Your Email").isEmail().normalizeEmail(),
  check("password", "Password Should Be Of 6 Or More Characters").isLength({
    min: 6,
  }),
];

export const updateDetailsRules = [
  check("name", "Name Is Required").notEmpty().trim().escape(),
  check("phone", "Mobile No. Is Required")
    .notEmpty()
    .trim()
    .escape()
    .isNumeric(),
  check("email", "Please Enter Your Email").isEmail().normalizeEmail(),
  check("age", "Age Is Required").notEmpty().trim().escape().isNumeric(),
];

export const updatePasswordRules = [
  check("password", "Password Should Be Of 6 Or More Characters").isLength({
    min: 6,
  }),
  check("newPassword", "Password Should Be Of 6 Or More Characters").isLength({
    min: 6,
  }),
];

export const createTodoRules = [
  check("topic", "Topic Is Required").notEmpty().trim().escape(),
  check("title", "Title Is Required").notEmpty().trim().escape(),
  check("description", "Description Is Required").notEmpty().trim().escape(),
];

export const updateTodoRules = [
  check("title", "Title Is Required").notEmpty().trim().escape(),
  check("description", "Description Is Required").notEmpty().trim().escape(),
  check("completed", "Completion Is Required")
    .notEmpty()
    .trim()
    .escape()
    .isBoolean(),
];

export const createTopicRules = [
  check("heading", "Heading Is Required").notEmpty().trim().escape(),
  check("brief", "Brief Is Required").notEmpty().trim().escape(),
];

export const updateTopicRules = [
  check("heading", "Heading Is Required").notEmpty().trim().escape(),
  check("brief", "Brief Is Required").notEmpty().trim().escape(),
];
