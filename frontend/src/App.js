import { Routes, Route } from "react-router-dom";

import Dashboard from "./components/pages/Dashboard";

import ProtectedRoutes from "./components/routes/ProtectedRoutes";

import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        {/*  <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route
          path="dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </>
  );
}

export default App;
