import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
export const CreateUser = async (app: FastifyInstance) => {
  app.get("/users", (req: FastifyRequest, res: FastifyReply) => {
    return res.status(200).send("Usuário criado com sucesso!");
  });
};
