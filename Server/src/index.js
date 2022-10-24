const express = require("express");
require("./db/mongoose");
const cors = require("cors");
const ProductsRouter = require("./routers/products");

const app = express();
app.use(cors());

const port = process.env.PORT || 3030;

app.use(express.json());
app.use(ProductsRouter);

app.listen(port, () => {
  console.log("server is up on port " + port);
});
