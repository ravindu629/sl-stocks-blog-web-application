import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/style.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import AdminRoute from "./components/AdminRoute";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import BlogListScreen from "./screens/admin/BlogListScreen";
import BlogEditScreen from "./screens/admin/BlogEditScreen";

import store from "./store";
import { Provider } from "react-redux";
import Blog from "./components/Blog";
import Latest from "./components/Latest";
import CategoryOne from "./components/CategoryOne";
import CategoryTwo from "./components/CategoryTwo";
import CategoryThree from "./components/CategoryThree";
import CategoryFour from "./components/CategoryFour";
import CategoryFive from "./components/CategoryFive";
import SubListScreen from "./screens/admin/SubListScreen";
import About from "./components/About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/latest" element={<Latest />} />
      <Route path="/category_1" element={<CategoryOne />} />
      <Route path="/category_2" element={<CategoryTwo />} />
      <Route path="/category_3" element={<CategoryThree />} />
      <Route path="/category_4" element={<CategoryFour />} />
      <Route path="/category_5" element={<CategoryFive />} />
      <Route path="/about" element={<About />} />

      {/* Admin users */}
      <Route path="" element={<AdminRoute />}>
        <Route path="/admin/bloglist" element={<BlogListScreen />} />
        <Route path="/admin/sublist" element={<SubListScreen />} />

        <Route path="/admin/blog/:id/edit" element={<BlogEditScreen />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
