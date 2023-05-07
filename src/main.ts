import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes";

dotenv.config();
const app: Application = express();
const PORT = process.env.PORT || 7470;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("good health"));
app.use("/api", router);

app.listen(PORT, () => {
  console.log("server start on port " + PORT);
});
