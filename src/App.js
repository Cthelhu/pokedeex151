import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";
import PrivateRoute from "./components/PrivateRoute"; // Importa tu PrivateRoute

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/pokedex"
          element={
            <PrivateRoute>
              <Pokedex />
            </PrivateRoute>
          }
        />
        <Route 
          path="/pokemon/:id" 
          element={
            <PrivateRoute>
              <Pokemon />
              </PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
