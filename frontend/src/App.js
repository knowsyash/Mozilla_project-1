import React, { useState } from "react";
import Navbar from "./components/Navbar";
// import ProfilePage from "./components/ProfilePage"; // Ensure this path is correct
// import FeedPage from "./components/FeedPage"; // Ensure this path is correct
import ProfilePage from "./components/Profilepage";
import FeedPage from "./components/FeedPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faRetweet, faComment } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    }
  };

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/feed" element={<FeedPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
