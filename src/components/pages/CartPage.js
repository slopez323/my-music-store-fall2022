import { CreditCard, Delete, Home } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "../../redux-state/cartSlice";
import CartItem from "../CartItem";
import Layout from "../layout/Layout";

function CartPage() {
  const shoppingCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = shoppingCart.reduce(
    (tot, item) => tot + Number(item.price) * item.qty,
    0
  );

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
          <CartItem item={item} key={item.id} />
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
          onClick={() => dispatch(emptyCart())}
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
