import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import backgroundImage from "./images/kintsugi.png";
import { PredictionPage } from "./PredictionPage";
import CSVTable from "./Components/CSVTable";

// Import WelcomePage if needed
import { WelcomePage } from "./WelcomePage";


function Data() {
  return <div style={{ color: "white", padding: "50px" }}>
    <CSVTable/>
  </div>;
}

// Main App
function App() {

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };
  

  return (
    <BrowserRouter>
      <div style={backgroundStyle}>
        <NavBar />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/prediction" element={<PredictionPage/>} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// NavBar Component
function NavBar() {

  // Navigator Style
  const navstyle = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "bold",
    backgroundImage:
      "linear-gradient(to right, #D4AF37 0%,#A28823 20%,#353535 30%, #000000 100%)",
    padding: "10px",
  };

  const textStyle = {
    padding: "30px",
    fontSize: "20px",
    color: "#fff",
    textDecoration: "none",
  };

  return (
    <nav style={navstyle}>
      <NavItem to="/" label="🏠 Home" textStyle={textStyle} />
      <NavItem to="/prediction" label="📊 Prediction" textStyle={textStyle} />
      <NavItem to="/data" label="📁 Data" textStyle={textStyle} />
    </nav>
  );
}

// Single Navigation Element
function NavItem({ to, label, textStyle }) {
  const [hover, setHover] = useState(false);

  const dynamicStyle = {
    ...textStyle,
    color: hover ? "#c2e4f8" : textStyle.color,
    cursor: "pointer",
    textDecoration: "none",
  };

  return (
    <Link
      to={to}
      style={dynamicStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {label}
    </Link>
  );
}
