import fastify from "fastify";
import { routes } from "./routes";
import cors from "@fastify/cors";

export const app = fastify();
app.register(routes);
app.register(cors, {});

app.listen({ port: 3001 }, (err, address) => {
  if (err) {
    console.log(err);
  }

  console.log(`Server online in porta 3001`);
});
