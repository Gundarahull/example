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

exports.getExamples = async (req, res) => {
  const getDetails = await Example.findAll();
  if (getDetails) {
    return res.status(200).json(getDetails);
  }
};

exports.deleteExample = async (req, res) => {
  const id = req.params.id;

  try {
    const userToDelete = await Example.findByPk(id);
    if (userToDelete) {
      await userToDelete.destroy();
      return res
        .status(200)
        .json({ message: "Successfully deleted", deletedUser: userToDelete });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to delete user", error: error.message });
  }
};
