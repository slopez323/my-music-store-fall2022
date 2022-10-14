import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CartPage from "./components/pages/CartPage";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import CustomThemeProvider from "./CustomThemeProvider";
// import store from "./redux-state/store";
import { signIn } from "./redux-state/userSlice";
import Axios from "./utils/Axios";

function App() {
  const dispatch = useDispatch();

  const checkLogin = async () => {
    try {
      const response = await Axios.get("/check-login");
      if (response.data.user) dispatch(signIn(response.data.user));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <CustomThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </CustomThemeProvider>
  );
}

export default App;
