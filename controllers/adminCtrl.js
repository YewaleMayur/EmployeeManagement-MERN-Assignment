const employeeModel = require("../models/employeeModel");
const userModel = require("../models/userModels");

const getAllUsersController = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(200).send({
      success: true,
      message: "users data list",
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "erorr while fetching users",
      error,
    });
  }
};

const getAllEmployeesController = async (req, res) => {
  try {
    const employees = await employeeModel.find({});
    res.status(200).send({
      success: true,
      message: "Employee Data list",
      data: employees,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while getting employees data",
      error,
    });
  }
};

// employee account status
const changeAccountStatusController = async (req, res) => {
  try {
    const { employeeId, status } = req.body;
    const employee = await employeeModel.findByIdAndUpdate(employeeId, { status });
    const user = await userModel.findOne({ _id: employee.userId });
    const notification = user.notification;
    notification.push({
      type: "employee-account-request-updated",
      message: `Your Employee Account Request Has ${status} `,
      onClickPath: "/notification",
    });
    user.isEmployee = status === "approved" ? true : false;
    await user.save();
    res.status(201).send({
      success: true,
      message: "Account Status Updated",
      data: employee,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Account Status",
      error,
    });
  }
};

module.exports = {
  getAllEmployeesController,
  getAllUsersController,
  changeAccountStatusController,
};
