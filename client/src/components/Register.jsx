import { useState } from "react";
import axios from "axios";
const url = "https://todonode-3zc4.onrender.com/api/user/register";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, {
        username,
        email,
        password,
      });
      if (response.data?.status === "success") {
        alert("You are registered successfully! Kindly login now");
      }
    } catch (err) {
      alert(err.response?.data?.message);
    }
  };

  return (
    <div className="register">
      <h1>Register Form</h1>
      <form>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name="username"
          placeholder="Username"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="Password"
        />
        <input type="submit" onClick={registerUser} value="Register" />
      </form>
    </div>
  );
}
