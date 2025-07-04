import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";
import store from "./app/store.js";
import Contact from "./pages/Contact.jsx";
import Layout from "./layout/Layout.jsx";
import About from "./pages/About.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/SignUp.jsx";
import Products from "./pages/Product.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Account from "./pages/Account.jsx";
import Product from "./pages/Product.jsx";
import ProductsViews from "./pages/ProductsViews.jsx";

// w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[135px]
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/account/address",
        element: <Account />,
      },
      {
        path: "/account/payments",
        element: <Account />,
      },
      {
        path: "/account/returns",
        element: <Account />,
      },
      {
        path: "/account/cancellations",
        element: <Account />,
      },
      {
        path: "/account/orders",
        element: <Account />,
      },
      {
        path: "/account/reviews",
        element: <Account />,
      },
      {
        path: "/products/:category/:id/:name",
        element: <ProductsViews />,
      },
      {
        path: "/products/:category",
        element: <Products />,
      },
      // Wildcard route to catch all unmatched routes
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
