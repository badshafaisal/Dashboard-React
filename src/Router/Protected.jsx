import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";


export default function Protected() {
  const { user, loading } = useStateContext();

  if (loading) return <div>Loading...</div>;

  if (!user) return <Navigate to="/login" />;

  return <Outlet />;
}
