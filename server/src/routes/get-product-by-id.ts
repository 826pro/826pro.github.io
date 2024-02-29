import { FastifyInstance } from "fastify";
import * as path from "path";
import * as fs from "fs";

interface Product {
  id: number;
}

export async function getProductById(app: FastifyInstance) {
  app.get<{ Params: { id: string } }>("/product/:id", async (req, reply) => {

    const productId = Number(req.params.id);

    const dataFilePath = path.join(__dirname, "..", "data", "data.json");

    try {
      const data: Product[] = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));

      const product = data.find((currentProduct) => currentProduct.id === productId);

      if (product) {
        return reply.status(201).send({ product, message: "Produto obtido com sucesso." });

      } else {

        return reply.status(404).send({ product, message: "Produto não encontrado" });
      }
    } catch (err) {
      
      return reply.status(500).send({ err: "Erro ao processar o arquivo de dados.", message: "Erro interno ao processar a solicitação." });
    }
  });
}
