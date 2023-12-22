import { Box, Button, Card, Typography,CardMedia } from "@mui/material";
import { useCount } from "../../hooks";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CardItem = ({ id, name, img, price, description, stock }) => {

  const { addItem } = useContext(CartContext);

  const { increment, decrement, count } = useCount(0, stock);

  return (
    <Card sx={{ maxWidth: 345, margin: 1, padding: 3 }}>
    <CardMedia component="img" height="140"image={img}/>
      <Typography variant="h5">{name}</Typography>
      <Typography color="text.secondary">{description}</Typography>
      <Typography color="text.secondary">Precio: ${price}</Typography>
      <Typography color="text.secondary">Stock: {stock}</Typography>
      <Box display="flex" alignContent="center">
        <Button variant="contained" color="secondary" sx={{ margin: 1 }} onClick={increment}>
          +
        </Button>
        <Typography fontSize={30}> {count} </Typography>
        <Button variant="contained" color="secondary" sx={{ margin: 1 }} onClick={decrement}>
          -
        </Button>
      </Box>
      <Button size="small" color="primary" variant="contained" onClick={() => addItem( {id, name, price}, count )}>
        Agregar al carrito
      </Button>
    </Card>
  );
};