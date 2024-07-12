import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
import { Row } from "antd";
import EmployeeList from "../components/EmployeeList";
const HomePage = () => {
  const [employees, setEmployees] = useState([]);
  // login user data
  const getUserData = async () => {
    try {
      const res = await axios.get(
        "/api/v1/user/getAllEmployees",

        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setEmployees(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <Layout>
      <h1 className="text-center">Welcome!</h1>
      {/* <img src="https://media.istockphoto.com/id/474866560/photo/pretty-female-medicine-doctor-working-with-modern-computer-interface.jpg?s=612x612&w=0&k=20&c=7u-C2myepFJw99quflxUJhzfksmd4_MRvu4KFo8T84U=" class="d-block w-100" alt="..."></img> */}
      <Row>
        {employees && employees.map((employee) => <EmployeeList employee={employee} />)}
      </Row>
    </Layout>
  );
};

export default HomePage;
