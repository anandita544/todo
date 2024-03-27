
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePage from './pages/CreatePage';
import DisplayPage from './pages/DisplayPage';
import UpdatePage from './pages/UpdatePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DisplayPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/update/:id" element={<UpdatePage />} />
      </Routes>
    </Router>
  );
}

export default App;
