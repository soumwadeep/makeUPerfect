import express from "express";
import dotenv from "dotenv";
import { connect } from "mongoose";
import connectionDB from "./database/connectionDB.js";
import cookieParser from "cookie-parser";

import todosRoutes from "./routes/todos.js";
import usersRoutes from "./routes/users.js";

const app = express();

dotenv.config();

connectionDB();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/todos", todosRoutes);
app.use("/api/users", usersRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server Is Running On Port ${process.env.PORT}`)
);
