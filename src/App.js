import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CartPage from "./components/pages/CartPage";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import { CartContextProvider } from "./contexts/cartContext";
import { UserContextProvider } from "./contexts/userContext";
import CustomThemeProvider from "./CustomThemeProvider";

function App() {
  return (
    <CustomThemeProvider>
      <UserContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sign-in" element={<LoginPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </UserContextProvider>
    </CustomThemeProvider>
  );
}

export default App;
