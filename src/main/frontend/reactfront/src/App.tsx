import React from 'react';
import MainPage from "./components/MainPage";
import MyComponent from "./components/MyComponent";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (

      <div className="App">
          <BrowserRouter basename="/">
              <Routes>
                  <Route path="/" element={<MainPage/>}></Route>
                  <Route path="/MyComponent" element={<MyComponent/>}></Route>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
