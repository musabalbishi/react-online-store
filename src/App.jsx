import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import "./index.css";
// layouts
import RootLayout from "./layouts/RootLayout";
// import EntryLayout from "./layouts/EntreyLayout";

// pages
import HomePage from "./pages/HomePage";
import EntryPage from "./pages/EntryPage";

// components
import Products from "./components/Products";
import Offers from "./components/Offers";
import Bookmarks from "./components/Bookmarks";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<EntryPage />}>
          <Route index element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Route>

        <Route path="/home" element={<HomePage />}>
          <Route path="products" element={<Products />} />
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
