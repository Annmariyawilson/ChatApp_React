import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed bg-[url('./src/assets/bgImage.jpg')]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
