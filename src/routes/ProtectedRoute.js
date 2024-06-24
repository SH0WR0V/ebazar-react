import { Navigate, useLocation } from "react-router-dom";
export const ProtectedRoute = ({ children }) => {
    const token = JSON.parse(sessionStorage.getItem('token'));
    const location = useLocation();
    return (
        token ? children : <Navigate to="/login" state={{ message: "Please login first to continue.", from: location }} />
    )
}
