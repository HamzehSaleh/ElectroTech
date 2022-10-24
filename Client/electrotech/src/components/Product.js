import React from "react";
import Card from "@material-ui/core/Card";
import {
  CardActions,
  CardMedia,
  Typography,
  CardContent,
  CardActionArea,
  Button,
} from "@material-ui/core";

const Product = (props) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" height="140" image={props.product.image} />
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.product.name}
          </Typography>
          <Typography variant="body2" component="p">
            {props.product.category}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
