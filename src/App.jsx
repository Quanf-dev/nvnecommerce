import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/noPage/NoPage";
import CartPage from "./pages/cart/CartPage";
import AllProductPage from "./pages/allProduct/AllProductPage";
import SignupPage from "./pages/registration/SignupPage";
import LoginPage from "./pages/registration/LoginPage";
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

const App = () => {
  return (
    <MyState>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/allproduct" element={<AllProductPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/:categoryname" element={<CategoryPage />} />{" "}
          {/* category Page route  */}
          <Route
            path="/user-dashboard"
            element={
              <ProtectedRouteForUser>
                <UserDashboardPage />
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
