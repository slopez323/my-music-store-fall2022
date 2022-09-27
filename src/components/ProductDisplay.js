import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/userContext";
import { useCart } from "../contexts/cartContext";

function ProductDisplay(props) {
  const { productData } = props;
  const { shoppingCart, setShoppingCart } = useCart();
  const { user } = useUser();
  const navigate = useNavigate();

  const addToCart = (productToAdd) => {
    if (user) {
      if (shoppingCart.some((product) => product.id === productToAdd.id)) {
        const updatedCart = shoppingCart.map((item) => {
          if (item.id === productToAdd.id) {
            const newQty = item.qty + 1;
            return { ...item, qty: newQty };
          }
          return item;
        });
        setShoppingCart(updatedCart);
      } else {
        setShoppingCart([...shoppingCart, { ...productToAdd, qty: 1 }]);
      }
    } else navigate("/sign-in");
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={productData.title} subheader={productData.brand} />
      <CardMedia
        component="img"
        height="294"
        image={productData.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box display="flex" justifyContent="space-between" width={1}>
          <Button onClick={() => addToCart(productData)}>Add to cart</Button>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}

export default ProductDisplay;
