import React from "react";
import { useNavigate } from "react-router-dom";

const EmployeeList = ({ employee }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="card m-2"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/employee/book-appointment/${employee._id}`)}
      >
        <div className="card-header">
           {employee.firstName} {employee.lastName}
        </div>
        <div className="card-body">
          <p>
            <b>Email</b> {employee.email}
          </p>
          <p>
            <b>Phone</b> {employee.phone}
          </p>
          <p>
            <b>Designation</b> {employee.designation}
          </p>
          <p>
            <b>Gender</b> {employee.gender}
          </p>
          <p>
            <b>Course</b> {employee.course}
          </p>
          <p>
            <b>createdate</b> {employee.CreateDate[0]} - {employee.CreateDate[1]}
          </p>
          <p>
            <b>Timings</b> {employee.timings[0]} - {employee.timings[1]}
          </p>
        </div>
      </div>
    </>
  );
};

export default EmployeeList;
