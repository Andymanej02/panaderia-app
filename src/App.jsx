import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login"; // Asegúrate de que la ruta de importación sea correcta
import Dashboard from "./components/Dashboard"; // Asegúrate de que la ruta de importación sea correcta

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Ruta para el Login */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Ruta para el Dashboard */}
      </Routes>
    </Router>
  );
}

export default App;


