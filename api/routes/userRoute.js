const express = require("express");
const User = require("../models/UserModel.js")
const { updateUser, deleteUser, findUser, findAllUser } = require("../controllers/userController.js");

const router = express.Router();

// //Create
// router.post("/", createUser);

//Update
router.put("/:id", updateUser);

//Delete
router.delete("/:id", deleteUser);

//Get
router.get("/:id", findUser);

//GetAll
router.get("/", findAllUser);

module.exports = router;
