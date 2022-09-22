import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import HomePage from './components/pages/HomePage';
import CustomThemeProvider from './CustomThemeProvider';

function App() {
  const [user, setUser] = useState();
  const [shoppingCart, setShoppingCart] = useState();

  return (
    <CustomThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </CustomThemeProvider>
  );
}

export default App;
