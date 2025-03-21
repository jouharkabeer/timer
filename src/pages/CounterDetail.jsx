import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const TimerDetails = () => {
  const { id } = useParams();
  const [timer, setTimer] = useState(null);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timers = JSON.parse(localStorage.getItem("timer")) || [];
    const selectedTimer = timers[id];

    if (!selectedTimer) {
      navigate("/"); // Redirect if timer is not found
      return;
    }

    setTimer(selectedTimer);

    const updateCountdown = () => {
      const now = new Date();
      const targetDate = new Date(selectedTimer.target);
      const diffInSeconds = Math.max(0, Math.floor((targetDate - now) / 1000));

      setSeconds(diffInSeconds % 60);
      setMinutes(Math.floor(diffInSeconds / 60) % 60);
      setHours(Math.floor(diffInSeconds / 3600));
    };

    updateCountdown(); // Initial call
    const interval = setInterval(updateCountdown, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, [id, navigate]);

  const deleteTimer = () => {
    const timers = JSON.parse(localStorage.getItem("timer")) || [];
    const updatedTimers = timers.filter((_, index) => index !== Number(id));
    localStorage.setItem("timer", JSON.stringify(updatedTimers));
    navigate("/");
  };

  if (!timer) return <p>Loading...</p>;

  return (
    <div className="counter-details">
      <h2>{timer.name}</h2>
      <p>{new Date(timer.target).toLocaleString()}</p>

      <p className="timer"> {hours}:{minutes}:{seconds} </p>
      <button className="delete-btn" onClick={deleteTimer}>Delete Timer</button>
    </div>
  );
};

export default TimerDetails;
