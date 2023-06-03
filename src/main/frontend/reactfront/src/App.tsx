import React from 'react';
import MainPage from "./components/MainPage";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Paimon from "../src/chatting/Paimon";
import Harry from "../src/chatting/Harry"
import Shrek from "../src/chatting/Shrek";
import Terra from "../src/chatting/Terra";

function App() {
  return (

      <div className="App">
          <BrowserRouter basename="/">
              <Routes>
                  <Route path="/" element={<MainPage/>}></Route>
                  <Route path="/paimon" element={<Paimon/>}></Route>
                  <Route path="/harry" element={<Harry/>}></Route>
                  <Route path="/shrek" element={<Shrek/>}></Route>
                  <Route path="/terra" element={<Terra/>}></Route>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
