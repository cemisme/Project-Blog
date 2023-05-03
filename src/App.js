import { Suspense } from "react";
import { AuthProvider, useAuth } from "./context/context-config";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import FoundPage from "./pages/FoundPage";
import AddPage from "./pages/AddPage";
import CategoryPage from "./pages/CategoryPage";
function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/signup" element={<SignUpPage></SignUpPage>}></Route>
          <Route path="/signin" element={<SignInPage></SignInPage>}></Route>
          <Route path="*" element={<FoundPage></FoundPage>}></Route>
          <Route path="/addnew" element={<AddPage></AddPage>}></Route>
          <Route
            path="/category"
            element={<CategoryPage></CategoryPage>}
          ></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}
export default App;
