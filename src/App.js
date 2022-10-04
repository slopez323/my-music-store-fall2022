import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CartPage from "./components/pages/CartPage";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import CustomThemeProvider from "./CustomThemeProvider";
import store from "./redux-state/store";

function App() {
  return (
    <CustomThemeProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<LoginPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </CustomThemeProvider>
  );
}

export default App;
