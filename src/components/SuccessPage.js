import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const [timeLeft, setTimeLeft] = useState(18000); // 5 hours in seconds
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  return (
    <div className="text-center my-5">
    <img
      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYtHuGsGR390AlwnoIRYXHXJ47ksc4Th36sfyrBP8KV4xPbEazq3GSFabZCXysDjd4aVsKF0wU2iGLUzBHNXWLfLKJSqZTPjYoezwatUJRGIAluj_F_TGp3QfNL4TyzHhMT6eVUR0fNYtS7SB6Mqk-hJjFgqdbhfEEAwP4CHPkv9adh0zotxblCgmEMHE/s16000/correct.png"
      alt="Processing"
      style={{
        width: "150px",
        height: "150px",
        margin: "100px auto",
      }}
    />
    <h2>We are verifying your details. Please wait for confirmation.</h2>
    <h3>Time left: {formatTime(timeLeft)}</h3>
    <h4>Complaint has been successfully registered!</h4>
    <button onClick={() => navigate("/")}>Submit Another Query</button>
  </div>
  
  );
};

export default SuccessPage;
