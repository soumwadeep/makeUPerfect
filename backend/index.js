import express from "express";
import dotenv from "dotenv";
import connectionDB from "./database/connectionDB.js";
import cookieParser from "cookie-parser";
import todosRoutes from "./routes/todos.js";
import usersRoutes from "./routes/users.js";
import topicsRoutes from "./routes/topics.js";
import cors from "cors";

const app = express();
dotenv.config();
app.use(
  cors({
    origin: [
      "http://localhost:3006",
      "http://task.makememaster.in",
      "https://task.makememaster.in",
    ],
    credentials: true,
  })
);
app.use(express.json());
connectionDB();
app.get("/", (req, res) => {
  res.json("Hello");
});
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/todos", todosRoutes);
app.use("/api/topics", topicsRoutes);
app.use("/api/users", usersRoutes);
app.listen(process.env.PORT, () =>
  console.log(`Server Is Running On Port ${process.env.PORT}`)
);
