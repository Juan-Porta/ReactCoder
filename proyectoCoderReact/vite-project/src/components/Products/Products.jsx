import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { Box, Button, Typography } from "@mui/material";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../../config/firebaseConfig";
import { CartContext } from "../../context/CartContext";
import { CardItem } from "../CardItem/CardItem";
import { FirebaseContext } from "../../context/FirebaseContext";
export const Products = () => {

  const { product, products, isLoading,getProductsDB, getProductById } = useContext(FirebaseContext);
 const { totalQuantity } = useContext(CartContext);
 





  useEffect(() => {
 
    getProductsDB();
    getProductById("Aw2M2CLEYrF3iDAKlH8H")

    console.log(product)
   
  }, []);

  return (
    <>
    
      <Box component="nav" display="flex" justifyContent="space-around" marginTop={5} >
        <Button variant="contained" color="inherit" onClick={() => getProductsDB()}>
          TODOS
        </Button>
        <Button variant="contained" color="inherit" onClick={() => getProductsDB("calzados")}>
          Calzados
        </Button>
        <Button variant="contained" color="inherit" onClick={() => getProductsDB("ropa")}>
          Ropa
        </Button>
        <Box display="flex">
          <ShoppingCartSharpIcon color="action" />
          <Typography> {totalQuantity} </Typography>
        </Box>
      </Box>
      <Typography fontSize={25} marginBottom={5} marginTop={5}  marginLeft={5} boxShadow={4}>
        PORT-PRAY
      </Typography>
      
      <Box component="div" display="flex" flexWrap="wrap" marginBottom={5} marginTop={5}  marginLeft={4}>
        {isLoading ? <h2>Cargando producto... por favor, espere.</h2> : products.map((product) => (
          <CardItem key={product.id} {...product} />
        ))}
      </Box>
    </>
  );
};