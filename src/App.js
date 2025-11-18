import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import StudentDashboard from "./pages/StudentDashboard";
import ProDashboard from "./pages/ProDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import RegisterStudent from "./pages/RegisterStudent";
import RegisterPro from "./pages/RegisterPro";
import Professionals from "./pages/Professionals";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-4xl mx-auto p-4">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register-student" element={<RegisterStudent />} />
          <Route path="/register-pro" element={<RegisterPro />} />
          <Route path="/login" element={<Login/>}></Route>
          {/* Student Dashboard */}
<Route
  path="/dashboard/student"
  element={
    <ProtectedRoute>
      <StudentDashboard />
    </ProtectedRoute>
  }
/>

{/* Professional Dashboard */}
<Route
  path="/dashboard/pro"
  element={
    <ProtectedRoute>
      <ProDashboard />
    </ProtectedRoute>
  }
/>

          <Route path="/pros" element={<Professionals />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
