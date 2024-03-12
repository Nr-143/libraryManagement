import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, NavLink } from "react-bootstrap";
import {Link} from "react-router-dom";
import { toast } from "react-toastify";
// import { useNavigate } from 'react-router-dom';
const Borrowed = () => {
  // const { id } = useParams();

  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);
 
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/get");
    setUsers(result.data);
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/post/${id}`);
    loadUsers();
  };
  const updateUserData = async (userId) => {
    const result = await axios.get(`http://localhost:8080/post/${userId}`);
    const userData = Array.isArray(result.data) ? result.data[0] : result.data;
    loadUserData(userData, userId);
  };
  const loadUserData = async (userData, userId) => {
    await axios.post("http://localhost:8080/postreturn", userData);
    toast.success("RETURNED SUCCESS....");
    deleteUser(userId);
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
            {users.map((user, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{user.book_name}</td>
                <td>{user.author_name}</td>
                <td>{user.book_code}</td>
                <td>{user.date}</td>
                <td>{user.date2}</td>
                <td>{user.student_name}</td>
                <td>{user.reg_no}</td>
                <td>{user.department}</td>
                <td>{user.mobile_no}</td>
                <td>
                  <Link
                    to={`/edituser/${user.id}`}
                    className="btn btn-outline-primary"
                  >
                    Edit
                  </Link>{" "}
                  <Button
                    variant="outline-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Renew
                  </Button>
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
