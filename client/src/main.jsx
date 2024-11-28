import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AddProducts from "./components/AddProducts/AddProducts.jsx";
import Home from "./components/Home/Home.jsx";
import ViewProduct from "./components/ViewProduct/ViewProduct.jsx";

// Define your routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="add-products" element={<AddProducts />} />
      <Route path="view-products" element={<ViewProduct />} />
    </Route>
  )
);

// Wrap RouterProvider with ProductProvider
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
