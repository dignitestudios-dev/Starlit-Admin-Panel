import { Route, Routes } from "react-router";
import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";
import AuthLayout from "./layouts/AuthLayout";
import { privateRoutes } from "./static/privateRoutes";
import Login from "./pages/authentication/Login";
import ForgotPassword from "./pages/authentication/ForgotPassword";
import ResetPassword from "./pages/authentication/ResetPassword";
import VerifyOtp from "./pages/authentication/VerifyOtp";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="text-7xl">
            Project Template || Please read readme file
          </div>
        }
      />
      <Route path="app" element={<DashboardLayout />}>
        {privateRoutes?.map((route) => {
          return (
            <Route path={route?.url} element={route?.page} key={route?.title} />
          );
        })}
      </Route>

      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="verify-otp" element={<VerifyOtp />} />
      </Route>

      <Route
        path="*"
        element={<div className="text-7xl">Page Not Found</div>}
      />
    </Routes>
  );
}

export default App;
