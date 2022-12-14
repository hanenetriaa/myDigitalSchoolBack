/** @format */

const { connect } = require("mongoose");
const { success, error } = require("consola");

const DB = process.env.APP_DB;

const connectDB = async () => {
  try {
    await connect(DB);
    success({
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
