import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddCounter from "./pages/AddCounter";
import CounterDetail from "./pages/CounterDetail";
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddCounter />} />
        <Route path="/timer/:id" element={<CounterDetail />} />
      </Routes>
    </Router>
  );
}

export default App;