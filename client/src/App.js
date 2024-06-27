import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Components/Login/Login.js';
import Register from './Components/Login/Register.js';
import Dashboard from './Components/Dashboard.js';

function App() {
    return (
      <Router>
      <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
  </Router>
    );
}

export default App;