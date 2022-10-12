/** @format */

// importation
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { randomBytes } = require("crypto");
const User = require("../models/User");

//Déclaration des variables d'environnement

const SECRET = process.env.APP_SECRET;
const RefreshTokens = [];

const register = async (req, res) => {
  try {
    // Hacher et récupérer le mot de passe
    const password = bcrypt.hashSync(req.body.password, 10);

    const user = new User({ ...req.body, password });
    await User.create(user);
    res.status(201).json({
      message: "user enregistrer",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      msg: "error " + error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email,
    });
    if (user) {
      const passwordcheck = bcrypt.compareSync(password, user.password);
      if (passwordcheck) {
        const token = jwt.sign({ id: user._id, user: user }, SECRET, {
          expiresIn: "7d",
        });
        var refreshToken = jwt.sign({ id: req.user }, SECRET, {
          expiresIn: 86400,
        });

        RefreshTokens[refreshToken] = user._id;

        const result = {
          user: user,
          email: user.email,
          token: token,
          refreshToken: refreshToken,
        };
        res.status(200).json({
          message: "login successed",
          ...result,
        });
      } else {
        res.status(400).json({
          message: "password invalid",
        });
      }
    } else {
      res.status(400).json({
        message: "email invalid",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.find({ _id: req.params.id });
    res.status(200).json({
      message: "our user",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      msg: "error" + error.message,
    });
  }
};

const logout = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id });
    user.connected = false;
    await user.save();
    res.status(200).json({
      message: " logout with success",
    });
  } catch (error) {
    res.status(400).json({
      msg: "error" + error.message,
    });
  }
};

module.exports = { register, login, logout, getUserById };
