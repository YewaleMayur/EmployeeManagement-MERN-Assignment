const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyEmployeeController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllEmployeesController,
  bookeAppointmentController,
  bookingAvailabilityController,
  userAppointmentsController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//Auth || POST
router.post("/getUserData", authMiddleware, authController);

//APply Doctor || POST
router.post("/apply-employee", authMiddleware, applyEmployeeController);

//Notifiaction  Employee || POST
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);
//Notifiaction  Employee || POST
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

//GET ALL DOC
router.get("/getAllEmployees", authMiddleware, getAllEmployeesController);

//BOOK APPOINTMENT
router.post("/book-appointment", authMiddleware, bookeAppointmentController);

//Booking Avliability
router.post(
  "/booking-availbility",
  authMiddleware,
  bookingAvailabilityController
);

//Appointments List
router.get("/user-appointments", authMiddleware, userAppointmentsController);

module.exports = router;
