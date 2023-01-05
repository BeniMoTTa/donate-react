import { Navigate, Route, Routes } from "react-router-dom";
import DashBoard from "../pages/dashboard";
import HomePage from "../pages/home";
import Profile from "../pages/profile";
import  Login  from "../pages/login";
import  Register  from "../pages/register";

export function RoutesMain() {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/dashboard" element={<DashBoard />} />
			<Route path="/home" element={<HomePage />} />
            <Route path="/profile/:id" element={<Profile />} />
			<Route path="*" element={<Navigate to="/login" />} />
		</Routes>
	);
}