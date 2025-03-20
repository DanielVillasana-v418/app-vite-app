import { Routes, Route } from "react-router-dom"; // ✅ NO IMPORTAMOS OTRA VEZ BrowserRouter
import Login from "./components/auth/Login";
import Dashboard from "./components/admin/dashboard/Dashboard";


function App() {
  return (
    <Routes> {/* ✅ Solo usamos <Routes> */}
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
