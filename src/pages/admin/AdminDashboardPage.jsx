import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProductDetail from "../../components/admin/ProductDetail";
import OrderDetail from "../../components/admin/OrderDetail";
import UserDetail from "../../components/admin/UserDetail";
import { useContext } from "react";
import myContext from "../../context/myContext";
import LayoutAdmin from "../../layout/LayoutAdmin";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const context = useContext(myContext);
  const { getAllProduct } = context;
  return (
    <LayoutAdmin>
      <div className="ml-[20rem] w-full">
        <Outlet />
      </div>
    </LayoutAdmin>
  );
};

export default AdminDashboard;
