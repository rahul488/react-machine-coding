import React, { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import {
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { MdAddShoppingCart, MdOutlineRemoveShoppingCart } from "react-icons/md";
import { FaShopify } from "react-icons/fa";
import Index from "./Pgaination/Index";
import { useCartContext } from "./CartProvider";

const getUrl = (limit = 10, skip = 0) => {
  return `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
};

function Mc5() {
  const { loading, fetchData } = useFetch();
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [totalPage, setTotalPages] = useState(0);

  const {cart,dispatch} = useCartContext();

  console.log(cart,'ss');

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchData(getUrl(10, page), "GET");
        setProducts((prev) => [...data.products]);
        setTotalPages(data?.total);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [page]);
  return (
    <Box>
      <Box
        sx={{ display: "flex", justifyContent: "end", margin: "0.5rem 0.5rem" }}
      >
        <IconButton>
          <Badge badgeContent={cart?.products.length} color="warning">
            <FaShopify size={"30"} />
          </Badge>
        </IconButton>
      </Box>
      <Grid container p={2} spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} md={4} key={product.id}>
            <Card elevation={4}>
              <CardMedia
                component={"img"}
                src={product.images[0]}
                height={"140px"}
              />
              <CardContent
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography variant="body2">{product.title}</Typography>
                <Typography variant="body1">${product.price}</Typography>
              </CardContent>
              <CardActions
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Tooltip title="Add to cart">
                  <IconButton onClick={() => dispatch({type:'ADD_TO_CART',payload:{product}})}>
                    <MdAddShoppingCart />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Remove from cart">
                  <IconButton>
                    <MdOutlineRemoveShoppingCart />
                  </IconButton>
                </Tooltip>
              </CardActions>
            </Card>
          </Grid>
        ))}
        <Grid item xs={12}>
        <Index totalPage={totalPage} pageCount={10} setPage={(val) => setPage(val)} currPage={page} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Mc5;
