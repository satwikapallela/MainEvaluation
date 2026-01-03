import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import CustomerDashboard from './pages/CustomerDashboard.jsx';
import UpdateRestaurant from './pages/UpdateRestaurant.jsx';
import ProtectedRoute from './routes/ProtectedRoute.jsx';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route 
        path="/admin" 
        element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} 
      />
      <Route 
        path="/customer" 
        element={<ProtectedRoute><CustomerDashboard /></ProtectedRoute>} 
      />
      <Route 
        path="/update/:id" 
        element={<ProtectedRoute><UpdateRestaurant /></ProtectedRoute>} 
      />
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;
