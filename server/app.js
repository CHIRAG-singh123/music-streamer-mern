import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";

// Routes

import userRoute from "./routes/user.js";
import musicRoute from "./routes/music.js";

// DB
import { ConnectDB } from "./db/connection.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

// for react static files
app.use(express.static("dist"));

app.use(cors({ credentials: true, origin: process.env.SITE_URL }));
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));

// routes
app.use("/api/user/", userRoute);
app.use("/api/music/", musicRoute);

app.get("/api", (req, res) => {
  res.send("Rhythm_Realm Api");
});

// for render react static files
app.get("/*", (req, res) => {
  res.sendFile(path.join(path.resolve(`${path.dirname("")}/dist/index.html`)));
});

app.listen(port, () => {
  console.log(`Server Started Port : ${port}`);
  ConnectDB((err, res) => {
    if (err) {
      console.log(`MongoDB Getting An Error : ${err}`);
    } else if (res) {
      console.log("MongoDB Successfully Connected");
    }
  });
});
