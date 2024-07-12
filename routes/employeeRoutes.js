const express = require("express");
const {
  getEmployeeInfoController,
  updateProfileController,
  getEmployeeByIdController,
  employeeAppointmentsController,
  updateStatusController,
} = require("../controllers/employeeCtrl");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

//POST SINGLE EMP INFO
router.post("/getEmployeeInfo", authMiddleware, getEmployeeInfoController);

//POST UPDATE PROFILE
router.post("/updateProfile", authMiddleware, updateProfileController);

//POST  GET SINGLE DOC INFO
router.post("/getEmployeeById", authMiddleware, getEmployeeByIdController);

//GET Appointments
router.get(
  "/employee-appointments",
  authMiddleware,
  employeeAppointmentsController
);

//POST Update Status
router.post("/update-status", authMiddleware, updateStatusController);

module.exports = router;
