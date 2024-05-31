const { where } = require("sequelize");
const Example = require("../model/example.model");

exports.getHomepage = (req, res) => {
  res.status(200).send("Welcome to the HomePage");
};

exports.postExampe = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  if (name === "" || email === "") {
    return res.status(400).json("All fields are REquired");
  }
  const existedUser = await Example.findOne({ where: { email: email } });
  if (existedUser) {
    return res.status(409).json("User already exists");
  }
  const POSTEXAMPLE = await Example.create({
    name: name,
    email: email,
  });
  if (POSTEXAMPLE) {
    return res.status(200).json(POSTEXAMPLE);
  }
};
