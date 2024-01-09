import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const url = "https://todonode-3zc4.onrender.com/api/user/login";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, { email, password });
      console.log(response);
      if (response.data?.status === "success") {
        alert("You are logged in now!");
        navigate("/all-todos");
      }
    } catch (err) {
      alert("some error occured. Please try again lator!");
    }
  };

  return (
    <div className="login">
      <h1>Login Form</h1>
      <form>
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
        <input onClick={loginUser} type="submit" value="Login" />
      </form>
    </div>
  );
}
