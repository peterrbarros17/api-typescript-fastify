import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
export const CreateProduct = async (app: FastifyInstance) => {
  app.get("/products", (req: FastifyRequest, res: FastifyReply) => {
    return res.status(200).send([
      { id: 1, name: "bola" },
      { id: 2, name: "boneco" },
    ]);
  });
};
