const mongoose = require("mongoose");
import app from "./app";
import connectMongoose from "./middleware/connectMongoose";

const PORT = 5000;

app.listen(PORT, () => {
  connectMongoose();
  console.log(`Your server is Running on port ${PORT}`);
});
