import axios from "axios";

export default function SingleTodo({ id, title, description }) {
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:3001/api/todo/${id}`
      );
      if (response.status === "ok") {
        window.reload();
      }
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <div className="signleTodo">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
}
