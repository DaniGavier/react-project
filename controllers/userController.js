const userModel = require("../models/userSchema");

exports.userRegister = (req, res) => {
  try {
    const newUser = new userModel(req.body);
    newUser.save();
    res.status(201).json({ msg: "Usuario creado correctamente" });
  } catch (error) {
    console.log(error);
  }
};
