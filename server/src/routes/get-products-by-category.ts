import { FastifyInstance } from "fastify";
import * as path from "path";
import * as fs from "fs";

interface Category {
    id: string;
    title: string;
    description: string;
    photo: string;
    size: number;
    serving: number;
    price: number;
    category: {
        id: number;
        label: string;
    };
}

export async function getProductsByCategoryId(app: FastifyInstance) {
  app.get<{ Params: { categoryId: string } }>("/products/category/:categoryId", async (req, reply) => {

    const categoryId = Number(req.params.categoryId);

    const dataFilePath = path.join(__dirname, "..", "data", "data.json");

    try {
      const data: Category[] = JSON.parse(fs.readFileSync(dataFilePath, "utf-8"));

      const productsInCategory = data.filter((product) => product.category.id === categoryId);

      if (productsInCategory.length > 0) {

        const categoryName = productsInCategory[0].category.label;

        return reply.status(201).send({ products: productsInCategory, categoryLabel: categoryName, message: `Produtos na categoria ${categoryName} obtidos com sucesso.` });

      } else {
        return reply.status(404).send({ err: `Nenhum produto encontrado na categoria ${categoryId}.`, message: `Nenhum produto encontrado na categoria ${categoryId}.` });
      }

    } catch (err) {

      return reply.status(500).send({ err: "Erro interno ao processar a solicitação.", message: "Erro ao processar o arquivo de dados." });

    }
  });
}
