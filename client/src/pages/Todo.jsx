import { useEffect, useState } from "react";
import SingleTodo from "../components/SignleTodo";
import axios from "axios";
import CreateTodo from "../components/CreateTodo";
const url = "https://todonode-3zc4.onrender.com/api/todo/";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const getAllTodos = async () => {
      try {
        const res = await axios.get(url);
        setTodos(res.data.data);
      } catch (err) {
        console.log(err.response);
      }
    };

    getAllTodos();
  }, []);

  const todoEl = todos?.map((todo) => {
    return (
      <SingleTodo
        key={todo._id}
        id={todo._id}
        title={todo.title}
        description={todo.description}
      />
    );
  });

  return (
    <div className="todo">
      <CreateTodo />
      <div className="all">
        <h2>All Your Todos</h2>
        <div className="container">{todoEl}</div>
      </div>
    </div>
  );
}

// manager.immutabldevs@gmail.com
