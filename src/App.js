import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <div>
      <span className="timer">{date.toLocaleTimeString()}</span>
    </div>
  );
}
export default App;
