import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [timers, setTimers] = useState([]);

  useEffect(() => {
    const savedTimer = JSON.parse(localStorage.getItem("timer")) || [];
    setTimers(savedTimer);
  }, []);

  return (
    <div className="home">
        <h2>Target Timer</h2>
      <Link to="/add" className="add-btn">+</Link>
      <div className="counter-list">
        {timers.length === 0 ? <p>No Timers added.</p> : 
          timers.map((timer, index) => (
            <Link key={index} to={`/timer/${index}`} className="counter-card">
              <h3>{timer.name}</h3>
              <p>Target: {timer.target}</p>
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Home;
