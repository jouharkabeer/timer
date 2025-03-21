import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTimer = () => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTimer = { name, target: new Date(time) }; // Fixes the Datetime issue
    const existingTimer = JSON.parse(localStorage.getItem("timer")) || [];
    localStorage.setItem("timer", JSON.stringify([...existingTimer, newTimer]));
    navigate("/");
  };

  return (
    <div className="add-counter">
      <h2>Add Timer</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} />
        <input type="datetime-local" placeholder="Select date time" required value={time} onChange={(e) => setTime(e.target.value)} />
        <button type="submit">Add Timer</button>
      </form>
    </div>
  );
};

export default AddTimer;
