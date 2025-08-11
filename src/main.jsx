import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import Blogs from "./pages/Blogs.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route element={<App/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/blogs/:id" element={<Blogs/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </Provider>
);
