import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Loginbg from "../assets/images/Loginbg.jpg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [loginfo, setloginfo] = useState({
    firstname: "",
    secondname: "",
    username: "",
    password: "",
    email: "",
  });

  const { firstname, secondname, username, password, email } = loginfo;
  const onInputChange = (e) => {
    setloginfo({ ...loginfo, [e.target.name]: e.target.value });
  };

  const onSave = async (e) => {
    e.preventDefault();
    try {
      if (firstname && secondname && username && password && email) {
        await axios.post("http://localhost:8080/postlogin", loginfo);
        toast.success("Successfully Updated ");
        navigate("/maindashboard-user");
      } else {
        toast.error("Failed to proceess the data");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error("Failed to proceess the data");
    }
  };

  return (
    <div className="signPage" style={{ backgroundImage: { Loginbg } }}>
      <img src={Loginbg} alt="" width="100%" height=" 729px" />
      <div className="signContainer">
        <Card style={{ width: "25rem", height: "43rem" }} className="SignCard">
          <Card.Body>
            <Card.Title
              style={{
                textAlign: "center ",
                color: "#116D6E",
                fontSize: "35px",
                fontWeight: "60px",
              }}
            >
              <b>Sign up</b>
            </Card.Title>
            <div className="lables">
              <label>First Name</label>
              <input
                type="text"
                value={firstname}
                name="firstname"
                onChange={onInputChange}
                required
              />
              <label>Second Name</label>
              <input
                type="text"
                value={secondname}
                name="secondname"
                onChange={onInputChange}
                required
              />
              <label>UserName</label>
              <input
                type="text"
                value={username}
                name="username"
                onChange={onInputChange}
                required
              />
              <label> Email</label>
              <input
                type="text"
                value={email}
                name="email"
                onChange={onInputChange}
                required
              />
              <label>Password</label>
              <input
                type="password"
                value={password}
                name="password"
                onChange={onInputChange}
              />
              <Button
                variant="success"
                style={{
                  width: "60%",
                  height: "50px",
                  marginTop: "30px",
                  fontSize: "25px",
                  marginLeft: "60px",
                }}
                onClick={onSave}
              >
                <b>Submit</b>
              </Button>{" "}
              <hr />
              <div className="Lsignup">
                <h5>Already Have an account?</h5>
                <Card.Link href="/" style={{ color: "blue" }}>
                  Log in
                </Card.Link>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default Signup;
