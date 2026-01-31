import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthPage from './auth/AuthPage';
import AdminDashboard from './pages/AdminDashboard';
import ComplainantDashboard from './pages/ComplainantDashboard';
import OfficeDashboard from './pages/OfficeDashboard';
import './App.css';

function App() {
  return (
    // Removed Router wrapper - using BrowserRouter in main.jsx
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/complainant" element={<ComplainantDashboard />} />
        <Route path="/office" element={<OfficeDashboard />} />
      </Routes>
    </div>
  );
}

export default App;