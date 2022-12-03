const userModel = require("../models/userSchema");
const bcryptjs = require("bcryptjs");

exports.userRegister = async (req, res) => {
  try {
    const salt = await bcryptjs.genSalt(10);
    const passwordEncrypt = await bcryptjs.hash(req.body.password, salt);
    const newUserObj = {
      username: req.body.username,
      password: passwordEncrypt,
    };
    const newUser = new userModel(newUserObj);
    newUser.save();
    res.status(201).json({ msg: "Usuario creado correctamente" });
  } catch (error) {
    console.log(error);
  }
};
