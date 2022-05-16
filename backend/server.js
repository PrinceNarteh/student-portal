require("dotenv").config();
const express = require("express");
const { dbConnect } = require("./libs/dbConnect");
const authRouter = require("./routes/auth.router");

const app = express();
app.use(express.json());

app.use("/auth", authRouter);

const start = async () => {
  await dbConnect();
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log("Server up and running");
  });
};

start();
