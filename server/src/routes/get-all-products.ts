import { FastifyInstance } from "fastify";
import * as path from "path";
import * as fs from "fs";

interface Product {
  id: string;
  title: string;
  description: string;
  photo: string;
  size: number;
  serving: number;
  price: number;
  category: {
    id: number,
    label: string
  }
}

export async function getAllProducts(app: FastifyInstance) {
  app.get("/products", async (req, reply) => {
    const dataFilePath = path.join(__dirname, "..", "data", "data.json");

    try {
      
      const data: Product[] = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));

      if (!data || !Array.isArray(data) || data.length === 0) {
        return reply.status(404).send({ message: "Nenhum produto encontrado." });
      }

      return reply.status(201).send({ products: data, message: "Produtos obtidos com sucesso." });
    } catch (err) {
      
      return reply.status(500).send({ err: "Erro ao processar o arquivo de dados.", message: "Erro interno ao processar a solicitação." });
    }
  });
}
