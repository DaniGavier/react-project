const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const PORT = 3001;
const routes = require("./routes");

//dataBase
require("./dataBase");

//middleware
//app.user(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

//routes
app.use("/", routes);

//status server
app.listen(PORT, () => {
  console.log("back ejecutandose en el puerto:", PORT);
});
