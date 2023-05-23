import React from 'react';
import MainPage from "./components/MainPage";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Paimon from "../src/chatting/Paimon";

function App() {
  return (

      <div className="App">
          <BrowserRouter basename="/">
              <Routes>
                  <Route path="/" element={<MainPage/>}></Route>
                  <Route path="/paimon" element={<Paimon/>}></Route>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
