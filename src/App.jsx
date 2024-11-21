import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/noPage/NoPage";
import ProductInfoPage from "./pages/productInfo/ProductInfoPage";
import CartPage from "./pages/cart/CartPage";
import AllProductPage from "./pages/allProduct/AllProductPage";
import SignupPage from "./pages/registration/SignupPage";
import LoginPage from "./pages/registration/LoginPage";
import UserDashboardPage from "./pages/user/UserDashboardPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AddProductPage from "./pages/admin/AddProductPage";
import UpdateProductPage from "./pages/admin/UpdateProductPage";
import MyState from "./context/myState";
import CategoryPage from "./pages/category/CategoryPage";
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";
import ScrollTop from "./components/scrollTop/ScrollTop";

const App = () => {
  return (
    <MyState>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/productinfo/:id" element={<ProductInfoPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/allproduct" element={<AllProductPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/category/:categoryname"
            element={<CategoryPage />}
          />{" "}
          {/* category Page route  */}
          <Route
            path="/user-dashboard"
            element={
              <ProtectedRouteForUser>
                <UserDashboardPage />
              </ProtectedRouteForUser>
            }
          />
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRouteForAdmin>
                <AdminDashboardPage />
              </ProtectedRouteForAdmin>
            }
          />
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