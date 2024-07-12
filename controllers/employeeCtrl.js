const appointmentModel = require("../models/appointmentModel");
const employeeModel = require("../models/employeeModel");
const userModel = require("../models/userModels");
const getEmployeeInfoController = async (req, res) => {
  try {
    const employee = await employeeModel.findOne({ userId: req.body.userId });
    res.status(200).send({
      success: true,
      message: "employee data fetch success",
      data: employee,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Fetching Employee Details",
    });
  }
};

// update EMP profile
const updateProfileController = async (req, res) => {
  try {
    const employee = await employeeModel.findOneAndUpdate(
      { userId: req.body.userId },
      req.body
    );
    res.status(201).send({
      success: true,
      message: "Employee Profile Updated",
      data: employee,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Employee Profile Update issue",
      error,
    });
  }
};

//get single Employee
const getEmployeeByIdController = async (req, res) => {
  try {
    const Employee = await employeeModel.findOne({ _id: req.body.employeeId });
    res.status(200).send({
      success: true,
      message: "Sigle Emp Info Fetched",
      data: employee,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Single employee info",
    });
  }
};

const employeeAppointmentsController = async (req, res) => {
  try {
    const employee = await employeeModel.findOne({ userId: req.body.userId });
    const appointments = await appointmentModel.find({
      employeeId: employee._id,
    });
    res.status(200).send({
      success: true,
      message: "Employee Appointments fetch Successfully",
      data: appointments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Emp Appointments",
    });
  }
};

const updateStatusController = async (req, res) => {
  try {
    const { appointmentsId, status } = req.body;
    const appointments = await appointmentModel.findByIdAndUpdate(
      appointmentsId,
      { status }
    );
    const user = await userModel.findOne({ _id: appointments.userId });
    const notification = user.notification;
    notification.push({
      type: "status-updated",
      message: `your appointment has been updated ${status}`,
      onCLickPath: "/employee-appointments",
    });
    await user.save();
    res.status(200).send({
      success: true,
      message: "Appointment Status Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error In Update Status",
    });
  }
};

module.exports = {
  getEmployeeInfoController,
  updateProfileController,
  getEmployeeByIdController,
  employeeAppointmentsController,
  updateStatusController,
};
