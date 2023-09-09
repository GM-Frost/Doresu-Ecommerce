import { Outlet } from "react-router-dom";
import AdminNav from "../Components/AdminNav";
import AdminFooter from "../Components/AdminFooter";
import MenuContainer from "../Components/MenuContainer";

const AdminDash = () => {
  return (
    <>
      <div className="flex flex-row h-screen w-screen overflow-hidden">
        <MenuContainer />
        <div className="flex-1">
          <AdminNav />
          <div className="p-4">
            <div>{<Outlet />}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDash;
