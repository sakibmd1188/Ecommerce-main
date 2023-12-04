import React, { useEffect, useState } from "react";
import "./Userlogin.css";

const UserLogin = () => {
  const [input, setInput] = useState({ email: "", pass: "" });
  const [message, setMessage] = useState({ email: "", pass: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };
  useEffect(() => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!input.email.match(emailPattern)) {
      setMessage((prevMessage) => ({
        ...prevMessage,
        email: "Invalid Email",
      }));
    } else {
      setMessage((prevMessage) => ({
        ...prevMessage,
        email: "",
      }));
    }
  }, [input.email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordPattern =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
    if (!input.pass.match(passwordPattern)) {
      setMessage((prevMessage) => ({
        ...prevMessage,
        pass: "Invalid pass",
      }));
    } else {
      setMessage((prevMessage) => ({
        ...prevMessage,
        pass: "",
      }));
    }
    console.log(input);
  };

  return (
    <div>
      <div className="aboutUs_header"></div>

      <form className="login_main" onSubmit={handleSubmit}>
        <span>Log in to your account</span>

        <div className="login_card">
          <div className="login_card_1">
            <div>
              <label>Email</label>
              <input
                // type="email"
                name="email"
                value={input.email}
                onChange={handleChange}
                // required
              />
            </div>
            {message.email && (
              <div style={{ color: "red" }}>{message.email}</div>
            )}
            <div>
              <label>Password</label>
              <input
                type="password"
                name="pass"
                value={input.pass}
                onChange={handleChange}
                required
              />
            </div>
            {message.pass && <div style={{ color: "red" }}>{message.pass}</div>}
            <label>Forgot your password</label>
            <br />
            <button type="submit">Sign in</button>
          </div>
          <div className="line"></div>
          <div style={{ marginTop: "10px" }}>
            <label>No Account? Create One</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;
