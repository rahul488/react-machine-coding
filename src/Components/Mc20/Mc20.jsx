import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { products } from "./data.json";
import { MdCurrencyRupee, MdShoppingBag } from "react-icons/md";
import Header from "./Header";
import { useCartContext} from "./Context/CartProvider";

function Mc20() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useCartContext();

  function getProducts() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(products);
      }, 2000);
    });
  }

  function addToCart(product){
    const payload={
        product:product
    }
    dispatch({type:'ADD_TO_CART',payload})
  }

  useEffect(() => {
    (async () => {
      setLoading(true);
      const productArr = await getProducts();
      setData(productArr);
      setLoading(false);
    })();
  }, []);
  return (
    <>
      <Header />
      <Box sx={{ margin: "20px" }}>
        {loading ? (
          <Typography textAlign={"center"}>Loading.....</Typography>
        ) : (
          data.map((product) => {
            return (
              <Card key={product.id} sx={{ width: "400px", margin: "20px" }}>
                <CardMedia
                  component={"img"}
                  src={product.image}
                  alt={product.name}
                  height={140}
                />
                <CardContent>
                  <Typography variant="body1">{product.name}</Typography>
                  <Typography variant="body1">
                    <MdCurrencyRupee />
                    {product.price}
                  </Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                  <MdShoppingBag size={"30"} cursor={"pointer"} color="red" onClick={() =>addToCart(product)}/>
                </CardActions>
              </Card>
            );
          })
        )}
      </Box>
    </>
  );
}

export default Mc20;
