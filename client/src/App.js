import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import Todo from "./pages/Todo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/all-todos" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
