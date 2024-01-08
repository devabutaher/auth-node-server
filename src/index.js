import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.json("Hello World!"));

app.listen(port, () => console.log(`Server listening on port ${port}!`));
