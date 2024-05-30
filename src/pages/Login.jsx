import React, { createContext, useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Loginbg from "../assets/images/Loginbg.jpg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDashboardcontext } from "./Mainlayout";

const Login = () => {
  const signinfo1 = useDashboardcontext();
  const signinfo = signinfo1.userData;
  console.log(signinfo);

  const navigate = useNavigate();
  const [check, setCheck] = useState({ user: "", password: "" });
  const { user, password } = check;

  const onInputChange = (e) => {
    setCheck({ ...check, [e.target.name]: e.target.value });
  };

  const onSave = () => {
    if (user == "Admin" && password == "Admin1234") {
      navigate("/maindashboard-admin");
    } else if (user && password) {
      const userExists = signinfo.find(
        (userInfo) => userInfo.email === user && userInfo.password === password
      );
      if (userExists) {
        console.log("user" + userExists);
        navigate("/maindashboard-user");
        toast.success("user logged in ",{position:"top-center"});
      } else {
        toast.error("user doesn't exists",{position:"top-center"});
        console.log("User not found");
      }
    } else {
      toast.error("Fill All The Field",{position:"top-center"});
    }
  };

  return (
    <div className="loginPage">
      <img src={Loginbg} alt="" width="100%" height="728px" />
      <div className="loginContainer">
        <Card style={{ width: "25rem", height: "35rem" }} className="loginCard">
          <Card.Body>
            <Card.Title style={{ textAlign: "center", fontSize: "30px" }}>
              <b>Sign in</b>
            </Card.Title>
            <div className="lables">
              <div style={{ display: "grid", placeItems: "", color: "black" }}>
                <label>Email</label>
                <input
                  type="text"
                  value={user}
                  name="user"
                  onChange={onInputChange}
                />
              </div>
              <label>Password</label>
              <input
                type="password"
                value={password}
                name="password"
                variant="outlined"
                onChange={onInputChange}
              />
              <div className="check"></div>
              <Button
                style={{ background: "#0D63A5", fontSize: "20px" }}
                size="lg"
                active
                onClick={onSave}
              >
                Log in
              </Button>{" "}
              <hr />
              <Button
                className="loginbtn"
                style={{ background: "#35155D" }}
                variant="primary"
                size="lg"
                active
              >
                Sign in with Facebook
              </Button>{" "}
              <Button style={{ background: "#393646" }} size="lg" active>
                Sign in with Google
              </Button>{" "}
              <div className="Lsignup">
                <h6>New User ?</h6>
                <Card.Link href="/signup"> Sign up</Card.Link>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
// export const userNameContext = () => useContext(userName);
export default Login;
