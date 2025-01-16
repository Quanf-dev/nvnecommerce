import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/noPage/NoPage";
import CartPage from "./pages/cart/CartPage";
import AllProductPage from "./pages/allProduct/AllProductPage";
import UserDashboardPage from "./pages/user/UserDashboardPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import MyState from "./context/myState";
import CategoryPage from "./pages/category/CategoryPage";
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";
import ScrollTop from "./components/scrollTop/ScrollTop";
import AddProductPage from "./pages/admin/AddProductPage";
import UpdateProductPage from "./pages/admin/UpdateProductPage";
import ProductDetail from "./components/admin/ProductDetail";
import OrderDetail from "./components/admin/OrderDetail";
import UserDetail from "./components/admin/UserDetail";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import OrderReceived from "./pages/orderReceived/orderReceived";
import AuthPage from "./pages/registration/AuthPage";
import UserDashboardPage3 from "./pages/user/UserDashboardPage3";
import Orders from "./components/user/OrdersView/OrdersView";
import EditAddress from "./components/user/editAddress/EditAddress";
import EditAccount from "./components/user/editAccount/EditAccount";
import AccountHome from "./components/user/accoutHome/AccountHome";
import OrdersView from "./components/user/OrdersView/OrdersView";

const App = () => {
  return (
    <MyState>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/san-pham" element={<AllProductPage />} />
          <Route path="/:categoryname" element={<CategoryPage />} />{" "}
          {/* category Page route  */}{" "}
          <Route
            path="/my-account"
            element={
              <ProtectedRouteForUser>
                <UserDashboardPage3 />
              </ProtectedRouteForUser>
            }
          >
            {" "}
            <Route index element={<AccountHome />} />
            <Route path="orders/*">
              {" "}
              <Route index element={<OrdersView />} />{" "}
              <Route path="view-order/:id" element={<OrdersView />} />{" "}
            </Route>
            <Route path="edit-address" element={<EditAddress />} />{" "}
            <Route path="edit-account" element={<EditAccount />} />{" "}
          </Route>{" "}
          <Route
            path="/user-dashboard3"
            element={
              <ProtectedRouteForUser>
                <UserDashboardPage3 />
              </ProtectedRouteForUser>
            }
          />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/checkout/order-received" element={<OrderReceived />} />
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRouteForAdmin>
                {" "}
                <AdminDashboardPage />{" "}
              </ProtectedRouteForAdmin>
            }
          >
            {" "}
            <Route path="manage-products" element={<ProductDetail />} />{" "}
            <Route path="manage-users" element={<UserDetail />} />{" "}
            <Route path="manage-orders" element={<OrderDetail />} />{" "}
          </Route>
          <Route
            path="/addproduct"
            element={
              <ProtectedRouteForAdmin>
                <AddProductPage />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path="/updateproduct/:id"
            element={
              <ProtectedRouteForAdmin>
                <UpdateProductPage />
              </ProtectedRouteForAdmin>
            }
          />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  );
};

export default App;
