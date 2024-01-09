import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import Todo from "./pages/Todo";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Auth />} />
            <Route path="/all-todos" element={<Todo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
