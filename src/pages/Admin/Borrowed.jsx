import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Borrowed = () => {
  const currentDate = new Date();
  const date1 = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year1 = currentDate.getFullYear();

  const tdyDate = `${year1}-${month < 10 ? "0" + month : month}-${
    date1 < 10 ? "0" + date1 : date1
  }`;
  const [usercheck, setUserCheck] = useState({});
  const [users, setUsers] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const accountSid =process.env.SID;
  const authToken = process.env.TOKEN;
  const twilioPhoneNumber = process.env.NUMBER; // Your Twilio phone number

  const handleReturnConfirmation = async (userId) => {
    setSelectedUserId(userId);
    try {
      const response = await axios.get(`http://localhost:8080/get/${userId}`);
      setUserCheck(response.data);
      setModalShow(true);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const handleReturn = () => {
    updateUserData(selectedUserId);
    setModalShow(false);
  };

  const sendMessage = async (student_name, author_name, book_name, mobile_no) => {
    try {
      const response = await axios.post(
        `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
        {
          Body:
            "\n\n Hello " +
            `${student_name}, \n \t You have successfully returned the book named "${book_name}" written by ${author_name} on ${tdyDate} \n\t Thank you !!!`,
          To: `+91${mobile_no}`, // Update to the correctly formatted phone number
          From: twilioPhoneNumber, // Update with your Twilio phone number
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${btoa(`${accountSid}:${authToken}`)}`,
          },
        }
      );

      console.log("Message sent successfully");
    } catch (error) {
      if (error.response) {
        console.error("Error sending message:", error.response.data);
      } else if (error.request) {
        console.error("Error sending message: No response received");
      } else {
        console.error("Error sending message:", error.message);
      }
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
      await axios.delete(`http://localhost:8080/delete/${id}`);
      loadUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const updateUserData = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:8080/get/${userId}`);
      const userData = response.data;
      const today = new Date();
      userData.date2 = today.toISOString().split('T')[0];
      loadUserData(userData, userId);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const loadUserData = async (userData, userId) => {
    try {
      await axios.post("http://localhost:8080/postreturn", userData);
      sendMessage(
        userData.student_name,
        userData.author_name,
        userData.book_name,
        userData.mobile_no
      );
      toast.success("RETURNED SUCCESS....",{position:"top-center"});
      deleteUser(userId);
    } catch (error) {
      console.error("Error loading user data:", error);
      // Optionally, handle the error here, such as displaying an error message to the user
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
                    <Button
                      onClick={() => handleReturnConfirmation(user.id)}
                      className="btn btn-outline-success"
                      style={{backgroundColor:"white"}}
                    >
                      Return
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="sm"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title style={{color:"green"}}>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{color:"red"}}>Check the details of user</p>
          <p>Student Name: {usercheck.student_name}</p>
          <p>Reg No: {usercheck.reg_no}</p>
          <p>Book Code: {usercheck.book_code}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalShow(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleReturn}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Borrowed;
