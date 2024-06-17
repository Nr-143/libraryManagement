import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Addbook = () => {
  const navigate = useNavigate();

  const accountSid = process.env.SID;
  const authToken = process.env.TOKEN;
  const twilioPhoneNumber =process.env.NUMBER; // Your Twilio phone number

  const [user, setUser] = useState({
    book_name: "",
    author_name: "",
    book_code: "",
    date: "",
    date2: "",
    student_name: "",
    reg_no: "",
    department: "",
    mobile_no: "",
    verificationCode: "",
  });

  const [code, setCode] = useState("");
  const [isVerificationSent, setIsVerificationSent] = useState(false);

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const sendVerificationCode = async () => {
    const code = generateVerificationCode();
    setCode(code);

    try {
      const response = await axios.post(
        `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
        new URLSearchParams({
          From: twilioPhoneNumber,
          To: `+91${user.mobile_no}`,
          Body: `Your verification code is: ${code}`,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${btoa(`${accountSid}:${authToken}`)}`,
          },
        }
      );

      console.log("Twilio Request Payload:", response.data);

      if (response.status === 201) {
        toast.success("Verification code sent successfully.",{position:"top-center"});
        setIsVerificationSent(true);
        // setUser({ ...user, verificationCode: code });
      } else {
        toast.error("Failed to send verification code.");
      }
    } catch (error) {
      console.error("Error sending verification code:", error);
      toast.error("Error sending verification code.",{position:"top-center"});
    }
  };

  const sendMessage = async () => {
    try {
      const response = await axios.post(
        `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
        {
          Body:
            "\n\n Hello " +
            `${user.student_name}, \n \t You had taken the book  "${user.book_name}" written by ${user.author_name} on ${user.date} you to return the book on or before ${user.date2}\n\t Thank you !!!`,
          To: `+91${user.mobile_no}`, // Update to the correctly formatted phone number
          From: twilioPhoneNumber, // Update with your Twilio phone number
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${btoa(`${accountSid}:${authToken}`)}`,
          },
        }
      );

      console.log("Message sent:", response.data);
    } catch (error) {
      console.error("Error sending message:", error.response.data);
    }
  };

  const generateVerificationCode = () => {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    console.log("Generated Verification Code:", code);
    return code;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!isVerificationSent) {
      sendVerificationCode();
    } else {
      if (code === user.verificationCode) {
        if (user.book_name) {
          if (user.author_name) {
            if (user.book_code.length === 6) {
              if (user.date) {
                if (user.date2) {
                  if (user.student_name) {
                    if (
                      (user.reg_no.length > 11 && user.reg_no.length < 14) ||
                      user.reg_no.length === 6
                    ) {
                      if (user.department) {
                        if (user.mobile_no) {
                          try {
                            await axios.post(
                              "http://localhost:8080/post",
                              user
                            );
                            toast.success("Success.",{position:"top-center"});
                            sendMessage();
                            navigate("/maindashboard-admin/borrowed");
                          } catch (error) {
                            console.error("Error submitting data:", error);
                          }
                        } else {
                          toast.error("Mobile number is required.",{position:"top-center"});
                        }
                      } else {
                        toast.error("Department is required.",{position:"top-center"});
                      }
                    } else {
                      toast.error(
                        "Registration number must be between 12-13 characters or exactly 6 characters."
                        ,{position:"top-center"});
                    }
                  } else {
                    toast.error("Student name must be 10 characters or less.",{position:"top-center"});
                  }
                } else {
                  toast.error("Date 2 is required.",{position:"top-center"});
                }
              } else {
                toast.error("Date is required.",{position:"top-center"});
              }
            } else {
              toast.error("Book code must be 6 characters.",{position:"top-center"});
            }
          } else {
            toast.error("Author name is required.",{position:"top-center"});
          }
        } else {
          toast.error("Book name is required.",{position:"top-center"});
        }
      } else {
        toast.error("Verification code is incorrect.",{position:"top-center"});
      }
    }
  };

  return (
    <div>
      <div className="addborrow">
        <div className="bookCard">
          <Card>
            <Card.Body>
              <div className="uploadcard">
                <label>Enter book name</label>
                <input
                  type="text"
                  placeholder="*Enter book name"
                  name="book_name"
                  value={user.book_name}
                  onChange={onInputChange}
                />
                <label>Enter author name</label>
                <input
                  type="text"
                  placeholder="*Enter author name"
                  name="author_name"
                  value={user.author_name}
                  onChange={onInputChange}
                />
                <label>Book CODE</label>
                <input
                  type="number"
                  placeholder="*Enter Book no "
                  name="book_code"
                  value={user.book_code}
                  onChange={onInputChange}
                />
                <label>Date of borrowed</label>
                <input
                  type="date"
                  placeholder=""
                  name="date"
                  value={user.date}
                  onChange={onInputChange}
                />
                <label>Return Date</label>
                <input
                  type="date"
                  placeholder=""
                  name="date2"
                  value={user.date2}
                  onChange={onInputChange}
                />
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className="bookCard">
          <Card>
            <Card.Body>
              <div className="uploadcard">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="*Enter the name"
                  name="student_name"
                  value={user.student_name}
                  onChange={onInputChange}
                />
                <label>Reg No / Staff Code</label>
                <input
                  type="text"
                  placeholder="*Enter Reg no"
                  name="reg_no"
                  value={user.reg_no}
                  onChange={onInputChange}
                />
                <label>Department</label>
                <select
                  name="department"
                  value={user.department}
                  onChange={onInputChange}
                  style={{ minWidth: "310px", minHeight: "40px" }}
                >
                  <option value="">*Select Department</option>
                  <option value="CSE">CSE</option>
                  <option value="IT">IT</option>
                  <option value="EEE">EEE</option>
                  <option value="ECE">ECE</option>
                  <option value="Mech">Mech</option>
                  <option value="BIO">Bio-Med</option>
                </select>

                <label>Mobile number</label>
                <input
                  type="text"
                  placeholder="*Enter mobile no"
                  name="mobile_no"
                  value={user.mobile_no}
                  onChange={onInputChange}
                />
                <div style={{ maxWidth: "79px" }}>
                  <div>
                    <label>Verification</label>
                    <input
                      type="text"
                      placeholder="*Enter verification code"
                      value={user.verificationCode}
                      onChange={(e) =>
                        setUser({ ...user, verificationCode: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>

      <Button
        variant="danger"
        style={{ marginTop: "20px", marginLeft: "1000px" }}
        onClick={onSubmit}
      >
        {isVerificationSent ? "Submit" : "Send Verification"}
      </Button>
    </div>
  );
};

export default Addbook;
