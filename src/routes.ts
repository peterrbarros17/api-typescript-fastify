import { ProductsRoutes } from "./routes/products/@ProductsRoutes";
import { UsersRoutes } from "./routes/users/@UsersRoutes";
import { app } from "./server";

export const routes = async () => {
  app.register(ProductsRoutes);
  app.register(UsersRoutes);
};
