import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout";
import axios from "axios";
import { message, Table } from "antd";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  //getUsers
  const getEmployees = async () => {
    try {
      const res = await axios.get("/api/v1/admin/getAllEmployees", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setEmployees(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // handle account
  const handleAccountStatus = async (record, status) => {
    try {
      const res = await axios.post(
        "/api/v1/admin/changeAccountStatus",
        { employeeId: record._id, userId: record.userId, status: status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        message.success(res.data.message);
        window.location.reload();
      }
    } catch (error) {
      message.error("Something Went Wrong");
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <span>
          {record.firstName} {record.lastName}
        </span>
      ),
    },
    {
      title: "image",
      dataIndex: "image",
    },
    {
      title: "email",
      dataIndex: "email",
    },
    {
      title: "designation",
      dataIndex: "designation",
    },
    {
      title: "gender",
      dataIndex: "gender",
    },
    {
      title: "course",
      dataIndex: "course",
    },
    {
      title: "phone",
      dataIndex: "phone",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          {record.status === "pending" ? (
            <button
              className="btn btn-success"
              onClick={() => handleAccountStatus(record, "approved")}
            >
              Approve
            </button>
          ) : (
            <button
            className="btn btn-danger"
            onClick={() => handleAccountStatus(record, "reject")}
          >Reject</button>
          )}
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <h1 className="text-center m-3">Employee List</h1>
      <Table columns={columns} dataSource={employees} />
    </Layout>
  );
};

export default Employees;
