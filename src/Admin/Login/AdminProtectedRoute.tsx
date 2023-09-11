import { RootState } from "../../redux/app/Store";
import { useAppSelector } from "../../redux/hooks/Hooks";
import AdminLogin from "./AdminLogin";

const AdminProtectedRoute = ({ children }: { children: any }) => {
  const { adminDetails } = useAppSelector((state: RootState) => state.admin);
  return adminDetails ? children : <AdminLogin />;
};

export default AdminProtectedRoute;
