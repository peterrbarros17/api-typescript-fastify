import { app } from "../../server";
import { CreateProduct } from "./create-product";

export const ProductsRoutes = async () => {
  app.register(CreateProduct);
};
