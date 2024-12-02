import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import AddProducts from "./components/AddProducts/AddProducts.jsx";
import Home from "./components/Home/Home.jsx";
import ViewProduct from "./components/ViewProduct/ViewProduct.jsx";
import Orders from "./components/Orders/Orders.jsx";
import Signup from "./components/Signup/Signup.jsx";
import Login from "./components/Login/Login.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Categories from "./components/Categories/Categories.jsx";
import ProductQuery from "./components/productQuery/ProductQuery.jsx";
import AllQuarries from "./components/AllQuarries/AllQuarries .jsx";

// Function to check if the user exists and if they are an admin
const getUserRole = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.userType || null; // Returns the userType (e.g., "admin") or null if no user
};

// Define routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Public Routes */}
      <Route path="" element={<Home />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="categories" element={<Categories />} />

      {/* Protected Routes for All Authenticated Users */}
      <Route
        path="profile"
        element={getUserRole() ? <Profile /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/product-query"
        element={
          getUserRole() ? <ProductQuery /> : <Navigate to="/login" replace />
        }
      />

      <Route
        path="view-products/:id"
        element={
          getUserRole() ? <ViewProduct /> : <Navigate to="/login" replace />
        }
      />

      {/* Admin-Only Routes */}
      <Route
        path="add-products"
        element={
          getUserRole() === "ADMIN" ? (
            <AddProducts />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="orders"
        element={
          getUserRole() === "ADMIN" ? (
            <Orders />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route
        path="all-quarries"
        element={
          getUserRole() === "ADMIN" ? (
            <AllQuarries />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Route>
  )
);

// Render RouterProvider
createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>
);
