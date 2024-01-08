import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import morgan from "morgan";
import connectDB from "./config/db.js";
import router from "./router/index.js";

const app = express();

connectDB();

app.use(
  cors({
    origin: ["http://localhost:3000", process.env.CLIENT_URL],
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.json(`Server listening on port ${port}!`));

app.listen(port, () => console.log(`Server listening on port ${port}!`));
