import {
  AppBar,
  Badge,
  Box,
  Card,
  CardMedia,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { MdCurrencyRupee, MdDelete, MdShoppingCart } from "react-icons/md";
import { useCartContext } from "./Context/CartProvider";

function Header() {
  const {
    cart: { cart },
    dispatch,
  } = useCartContext();
  const [showCartDetails, setCartDetails] = useState(false);
  return (
    <AppBar elevation={5} position="sticky" color="transparent">
      <Toolbar>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <Badge badgeContent={cart.length} color="error">
            <MdShoppingCart
              size={"30"}
              cursor={"pointer"}
              color="green"
              onClick={() => setCartDetails(!showCartDetails)}
            />
          </Badge>
          {cart.length && showCartDetails ? (
            <Box
              sx={{
                position: "absolute",
                height: "400px",
                overflowY: "auto",
                width: "300px",
                top: "100%",
                border: "1px solid #eee",
              }}
            >
              {cart.map((product) => (
                <Box
                  key={product.id}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: "1rem 0.5rem",
                  }}
                >
                  <Card
                    sx={{
                      height: "100px",
                      width: "100px",
                    }}
                  >
                    <CardMedia
                      component={"img"}
                      src={product.image}
                      alt={product.name}
                      height={"100%"}
                      width={"100%"}
                    />
                  </Card>
                  <Box>
                    <Typography>Quantity-{product.quantity}</Typography>
                    <Typography
                      mt={2}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      Price-
                      <MdCurrencyRupee color="red" />
                      {+product.price * product.quantity}
                    </Typography>
                  </Box>
                  <MdDelete
                    cursor={"pointer"}
                    color="red"
                    size={"25"}
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: { id: product.id },
                      })
                    }
                  />
                </Box>
              ))}
            </Box>
          ) : null}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
