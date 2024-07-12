const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    firstName: {
      type: String,
      required: [true, "first name is required"],
    },
    lastName: {
      type: String,
      required: [true, "last name is required"],
    },
    phone: {
      type: String,
      required: [true, "phone no is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    designation: {
      type: String,
      required: [true, "designation is required"],
    },
    gender: {
      type: String,
      required: [true, "gender is required"],
    },
    course: {
      type: [String],
      required: [true, "course is required"],
    },
    imageupload: {
      type: String,
      default: "imageupload is required",
    },
    timings: {
      type: Object,
      required: [true, "wrok timing is required"],
    },
  },
  { timestamps: true }
);

const employeeModel = mongoose.model("employees", employeeSchema);
module.exports = employeeModel;
