import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import "./index.css";
// layouts
import RootLayout from "./layouts/RootLayout";

// pages
import HomePage from "./pages/HomePage";
import EntryPage from "./pages/EntryPage";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";

// components
import Products from "./components/products/Products";
import Offers from "./components/Offers";
import Bookmarks from "./components/Bookmarks";
import ProductDetails from "./components/products/ProductDetails";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<EntryPage />}>
          <Route index element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Route>

        <Route path="/home" element={<HomePage />}>
          <Route path="products" element={<Products />}>
            <Route path=":id" element={<ProductDetails />} />
          </Route>
          <Route path="offers" element={<Offers />} />
          <Route path="bookmarks" element={<Bookmarks />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
