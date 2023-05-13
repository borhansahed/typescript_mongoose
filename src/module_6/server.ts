const mongoose = require("mongoose");
import app from "./app";

const PORT = 5000;

// database Connection

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected");
  } catch (err: any) {
    console.log("not connected", err);
  }
}

app.listen(PORT, () => {
  main();
  console.log(`Your server is Running on port ${PORT}`);
});
