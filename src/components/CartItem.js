import { DeleteForever } from "@mui/icons-material";
import { Typography, Box, IconButton, Avatar } from "@mui/material";

function CartItem(props) {
  const { item } = props;
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
        <Typography>{`$${item.price.toFixed(2)}`}</Typography>
      </Box>
      <Box>
        <IconButton aria-label="remove from cart">
          <DeleteForever />
        </IconButton>
      </Box>
    </Box>
  );
}

export default CartItem;
