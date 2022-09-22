import { CreditCard, Delete, Home } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CartItem from "../CartItem";
import Layout from "../layout/Layout";

function CartPage(props) {
  const { user, shoppingCart, setShoppingCart } = props;
  const navigate = useNavigate();

  const total = shoppingCart.reduce((tot, item) => tot + Number(item.price), 0);

  return (
    <Layout user={user}>
      <Box width={1} display="flex" flexDirection="column" alignItems="center">
        {shoppingCart.map((item) => (
          <CartItem item={item} />
        ))}
      </Box>
      <Box textAlign="center" p={4} fontWeight="bold">
        Total: ${total.toFixed(2)}
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
