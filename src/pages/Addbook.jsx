import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Addbook = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    book_name: "",
    author_nName: "",
    book_code: "",
    date: "",
    date2: "",
    student_name: "",
    reg_no: "",
    department: "",
    mobile_no: "",
  });
  
  const {
    book_name,
    author_name,
    book_code,
    date,
    date2,
    student_name,
    reg_no,
    department,
    mobile_no,
  } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        book_name &&
        author_name &&
        book_code &&
        date &&
        date2 &&
        student_name &&
        reg_no &&
        department &&
        mobile_no
      ) {
        await axios.post("http://localhost:8080/post", user);
        alert("Success.");
      } else {
        toast.error("Fill all the required fields");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div>
      <div className="addborrow">
        <div className="bookCard">
          <Card
            style={{
              width: "20rem",
              height: "25rem",
              boxShadow: 'rgba(0, 0, 0, 0.15) 1.5px 2.6px 2.6px 0px',
            }}
          >
            <Card.Body>
              <div className="uploadcard">
                <label>Enter book name</label>
                <input
                  type="text"
                  placeholder="*Enter book name"
                  name="book_name"
                  value={book_name}
                  onChange={onInputChange}
                />
                <label>Enter author name</label>
                <input
                  type="text"
                  placeholder="*Enter author name"
                  name="author_name"
                  value={author_name}
                  onChange={onInputChange}
                />
                <label>Book CODE</label>
                <input
                  type="number"
                  placeholder="*Enter Book no "
                  name="book_code"
                  value={book_code}
                  onChange={onInputChange}
                />
                <label>Date of borrowed</label>
                <input
                  type="date"
                  placeholder=""
                  name="date"
                  value={date}
                  onChange={onInputChange}
                />
                <label>Return Date</label>
                <input
                  type="date"
                  placeholder=""
                  name="date2"
                  value={date2}
                  onChange={onInputChange}
                />
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="bookCard">
          <Card
            style={{
              width: "20rem",
              height: "25rem",
              boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
            }}
          >
            <Card.Body>
              <div className="uploadcard">
                <label>Student Name</label>
                <input
                  type="text"
                  placeholder="*Enter the name"
                  name="student_name"
                  value={student_name}
                  onChange={onInputChange}
                />
                <label>Reg NO</label>
                <input
                  type="number"
                  placeholder="*Enter Reg no"
                  name="reg_no"
                  value={reg_no}
                  onChange={onInputChange}
                />
                <label>Department</label>
                <input
                  type="text"
                  placeholder="*Enter Dept"
                  name="department"
                  value={department}
                  onChange={onInputChange}
                />
                <label>Mobile number</label>
                <input
                  type="number"
                  placeholder="*Enter mobile no"
                  name="mobile_no"
                  value={mobile_no}
                  onChange={onInputChange}
                />

                <Button
                  variant="danger"
                  style={{ marginTop: "20px" }}
                  onClick={onSubmit}
                >
                  Submit
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Addbook;
