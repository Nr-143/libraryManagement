import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Borrowed = () => {
  const currentDate = new Date();
  const date1 = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year1 = currentDate.getFullYear();

  const tdyDate = `${year1}-${month < 10 ? "0" + month : month}-${
    date1 < 10 ? "0" + date1 : date1
  }`;

  const [users, setUsers] = useState([]);

  const sendMessage = async (
    student_name,
    author_name,
    book_name,
    mobile_no
  ) => {
    try {
      const response = await axios.post(
        `https://api.twilio.com/2010-04-01/Accounts/AC65b59524118996a67f4345ba9c34d262/Messages.json`,
        {
          Body:
            "\n\n Hello " +
            `${student_name}, \n \t You have successfully returned the book named "${book_name}" written by ${author_name} on ${tdyDate} \n\t Thank you !!!`,
          To: `+91${mobile_no}`, // Update to the correctly formatted phone number
          From: "+12513090523", // Update with your Twilio phone number
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${btoa(
              "AC65b59524118996a67f4345ba9c34d262:a0c162d785c8c9e93bd19c3035c8ada1"
            )}`,
          },
        }
      );

      console.log("Message sent:", response.data);
    } catch (error) {
      console.error("Error sending message:", error.response.data);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const result = await axios.get("http://localhost:8080/get");
      setUsers(result.data);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/post/${id}`);
      loadUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const updateUserData = async (userId) => {
    try {
      const result = await axios.get(`http://localhost:8080/post/${userId}`);
      const userData = Array.isArray(result.data)
        ? result.data[0]
        : result.data;
      userData.date2 = tdyDate;
      await loadUserData(userData, userId);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const loadUserData = async (userData, userId) => {
    try {
      await axios.post("http://localhost:8080/postreturn", userData);
      toast.success("RETURNED SUCCESS....");
      await deleteUser(userId);
      console.log("userdata" + userData.student_name);
      await sendMessage(
        userData.student_name,
        userData.author_name,
        userData.book_name,
        userData.mobile_no
      );
    } catch (error) {
      console.error("Error loading user data:", error);
    }
  };

  return (
    <div>
      <div className="userdata">
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>S.no</th>
              <th>Book Name</th>
              <th>Author Name</th>
              <th>Book Code</th>
              <th>Date of Borrowed</th>
              <th>Date of Return</th>
              <th>Student Name</th>
              <th>Reg no</th>
              <th>Department</th>
              <th>Mobile no</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users
              .slice(0)
              .reverse()
              .map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.book_name}</td>
                  <td>{user.author_name}</td>
                  <td>{user.book_code}</td>
                  <td>{user.date}</td>
                  <td>{user.date2}</td>
                  <td
                    style={{
                      color: user.reg_no.length === 6 ? "red" : "black",
                    }}
                  >
                    {user.student_name}
                  </td>
                  <td>{user.reg_no}</td>
                  <td>{user.department}</td>
                  <td>{user.mobile_no}</td>
                  <td>
                    <Link
                      to={`/maindashboard-admin/edituser/${user.id}`}
                      className="btn btn-outline-primary"
                    >
                      Renew
                    </Link>{" "}
                    <Link
                      onClick={() => updateUserData(user.id)}
                      className="btn btn-outline-success"
                    >
                      Return
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Borrowed;
