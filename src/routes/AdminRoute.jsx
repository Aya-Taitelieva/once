import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const AdminRoute = () => {
	const { isAdmin } = useAuthContext();

	if (!isAdmin()) {
		alert("Only admin can access this page");
		return <Navigate to="/products" />;
	}

	return <Outlet />;
};

export default AdminRoute;
