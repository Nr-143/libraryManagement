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
    name: "",
    regno: "",
    year: "",
    department:"",
    password: "",
    email: "",
  });

  const { name, regno, year, department,password, email } = loginfo;
  const onInputChange = (e) => {
    setloginfo({ ...loginfo, [e.target.name]: e.target.value });
  };

  const onSave = async (e) => {
    e.preventDefault();
    try {
      if (name && regno && (year<5 && year>0 )&& password && email) {
        await axios.post("http://localhost:8080/postlogin", loginfo);
        toast.success("Successfully Updated ",{position:"top-center"});
        navigate("/maindashboard-user");
      } else {
        toast.error("Failed to proceess the data",{position:"top-center"});
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error("Failed to proceess the data",{position:"top-center"});
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
              <label>Name</label>
              <input
                type="text"
                value={name}
                name="name"
                onChange={onInputChange}
                required
              />
              <label>Reg no</label>
              <input
                type="text"
                value={regno}
                name="regno"
                onChange={onInputChange}
                required
              />
              <div style={{display:"flex",marginTop:"20px",gap:"5px"}}>
              <div style={{display:"flex",flexDirection:"column"}}>
              <label>Department</label>
              <input
                
                 style={{width:"116px",marginLeft:"25px",marginRight:"8px",marginTop:"3px"}}
                type="text"
                value={department}
                name="department"
                onChange={onInputChange}
                required
              />
            </div>
            <div style={{display:"flex",flexDirection:"column",marginLeft:"32px"}}>
              <label >  Year </label>
              <input
              style={{width:"70px",marginTop:"3px"}}
                type="text"
                value={year}
                name="year"
                onChange={onInputChange}
                required
              />
              </div>
              
              </div> 
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
