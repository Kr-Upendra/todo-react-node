import { useState } from "react";
import axios from "axios";
const url = "https://todonode-3zc4.onrender.com/api/todo/";

export default function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createTodo = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, {
        title,
        description,
      });
      if (response.data?.status === "success") {
        alert("new todo added");
      }
    } catch (err) {
      alert(err.response?.data?.message);
    }
  };

  return (
    <form>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        name="title"
        placeholder="Title"
      />
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        name="description"
        placeholder="Description"
      />
      <button type="submit" onClick={createTodo}>
        Create
      </button>
    </form>
  );
}
