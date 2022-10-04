import { DeleteForever } from "@mui/icons-material";
import { Typography, Box, IconButton, Avatar } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux-state/cartSlice";

function CartItem(props) {
  const { item } = props;
  const dispatch = useDispatch();

  return (
    <Box
      display="flex"
      width={0.8}
      gap="10px"
      alignItems="center"
      border="1px solid gray"
      borderRadius="5px"
      p={2}
    >
      <Avatar alt={item.title} src={item.image} variant="square" />
      <Box flexGrow={1}>
        <Typography>{item.title}</Typography>
        <Typography>
          {`$${item.price.toLocaleString("en-US", {
            minimumFractionDigits: 2,
          })}`}
        </Typography>
      </Box>
      <Box>x{item.qty}</Box>
      <Box>
        <IconButton
          aria-label="remove from cart"
          onClick={() => dispatch(removeFromCart(item))}
        >
          <DeleteForever />
        </IconButton>
      </Box>
    </Box>
  );
}

export default CartItem;
