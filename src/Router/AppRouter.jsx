import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Dashboard/Profile";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import Protected from "./Protected";

function AppRouter() {
  return (
    <div>
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route element={<Protected />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default AppRouter;
