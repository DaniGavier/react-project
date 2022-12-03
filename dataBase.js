const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:O7372Yokvh6GiQmP@cluster0.xpmyjch.mongodb.net/films?retryWrites=true&w=majority",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("base de datos ok");
    }
  }
);
