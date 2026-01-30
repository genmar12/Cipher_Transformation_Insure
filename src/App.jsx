import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/Auth";
import AdminDashboard from "./pages/AdminDashboard";
import ComplainantDashboard from "./pages/ComplainantDashboard";



import './index.css'

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/complainant" element={<ComplainantDashboard />} />
    </Routes>
  );
}

export default App;
