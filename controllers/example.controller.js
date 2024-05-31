const { where } = require("sequelize");
const Example = require("../model/example.model");

exports.getHomepage = (req, res) => {
  res.status(200).send("Welcome to the HomePage");
};

// exports.postExampe = async (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   if (name === "" || email === "") {
//     return res.status(400).json("All fields are REquired");
//   }
//   const existedUser = await Example.findOne({ where: { email: email } });
//   if (existedUser) {
//     return res.status(409).json("User already exists");
//   }
//   const POSTEXAMPLE = await Example.create({
//     name: name,
//     email: email,
//   });
//   if (POSTEXAMPLE) {
//     return res.status(200).json(POSTEXAMPLE);
//   }
// };
exports.postExample = async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await Example.findOne({ where: { email } });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const newExample = await Example.create({
      name,
      email,
    });

    return res.status(201).json(newExample);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to create example", error: error.message });
  }
};

exports.getExamples = async (req, res) => {
  try {
    const getDetails = await Example.findAll();

    if (getDetails.length > 0) {
      return res.status(200).json(getDetails);
    } else {
      return res.status(404).json({ message: "No examples found" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to retrieve examples", error: error.message });
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

exports.editExample = async (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;

  try {
    const example = await Example.findByPk(id);
    if (!example) {
      return res.status(404).json({ message: "Example not found" });
    }
    if (name) {
      example.name = name;
    }
    if (email) {
      example.email = email;
    }
    await example.save();
    return res.status(200).json(example);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to update example", error: error.message });
  }
};
