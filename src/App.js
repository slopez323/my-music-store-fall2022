import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CartPage from "./components/pages/CartPage";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import CustomThemeProvider from "./CustomThemeProvider";

function App() {
  const [user, setUser] = useState();
  const [shoppingCart, setShoppingCart] = useState([
    {
      id: "123",
      title: "Blue Drum Set",
      description: "Blue drums description",
      brand: "Yamaha",
      price: 59999,
      image:
        "https://www.yamaha.com/yamahavgn/PIM/Images/19027_12073_1_1200x1200_80813f268e73483818697e99937dbd59.jpg",
    },
  ]);

  return (
    <CustomThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                user={user}
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
              />
            }
          />
          <Route
            path="/sign-in"
            element={<LoginPage user={user} setUser={setUser} />}
          />
          <Route
            path="/cart"
            element={
              <CartPage
                user={user}
                shoppingCart={shoppingCart}
                setShoppingCart={setShoppingCart}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </CustomThemeProvider>
  );
}

export default App;
