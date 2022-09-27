import { CreditCard, Delete, Home } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/cartContext";
import CartItem from "../CartItem";
import Layout from "../layout/Layout";

function CartPage() {
  const { shoppingCart, setShoppingCart } = useCart();
  const navigate = useNavigate();

  const total = shoppingCart.reduce(
    (tot, item) => tot + Number(item.price) * item.qty,
    0
  );

  const deleteItem = (itemToDelete) => {
    const updatedCart = shoppingCart
      .map((item) => {
        if (item.id === itemToDelete.id) {
          const newQty = item.qty - 1;
          return { ...item, qty: newQty };
        }
        return item;
      })
      .filter((item) => item.qty !== 0);
    setShoppingCart([...updatedCart]);
  };

  return (
    <Layout>
      <Box
        width={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2}
      >
        {shoppingCart.map((item) => (
          <CartItem item={item} deleteItem={deleteItem} key={item.id} />
        ))}
      </Box>
      <Box textAlign="center" p={4} fontWeight="bold">
        Total: ${total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Button
          variant="contained"
          startIcon={<CreditCard />}
          sx={{ width: "200px" }}
        >
          <Box>Checkout</Box>
        </Button>
        <Button
          variant="contained"
          startIcon={<Delete />}
          sx={{ width: "200px" }}
          onClick={() => setShoppingCart([])}
        >
          <Box>Empty Cart</Box>
        </Button>
        <Button
          variant="contained"
          startIcon={<Home />}
          sx={{ width: "200px" }}
          onClick={() => navigate("/")}
        >
          <Box>Home Page</Box>
        </Button>
      </Box>
    </Layout>
  );
}

export default CartPage;
