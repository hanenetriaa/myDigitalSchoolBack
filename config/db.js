/** @format */

const { connect } = require("mongoose");
const { sucess, error } = require("consola");

const DB = process.env.APP_DB;

const connectDB = async () => {
  try {
    await connect(DB);
    sucess({
      message: "connected succes",
      badge: true,
    });
  } catch (err) {
    error({
      message: `connected refuse ${err.message}`,
      badge: true,
    });
    connectDB();
  }
};

module.exports = connectDB();
