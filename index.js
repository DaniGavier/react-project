const express = require("express");
const morgan = require("morgan");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const PORT = 3001;

app.user(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

app.listen(PORT, () => {
  console.log("back ejecutandose en el puerto:", PORT);
});
